// 僅在使用者的瀏覽器內計算與展示：不會寄送或儲存訂購資料。
const UNIT_PRICE = 499;
const HUB_FEE_PER_BOX = 80; // 企劃書中的集中配送成本假設；不代表正式運費
const $ = id => document.getElementById(id);
const money = n => `NT$${n.toLocaleString('zh-TW')}`;
const selectOptions = (items) => items.map(name => {
  const option = document.createElement('option'); option.value = name; option.textContent = name; return option;
});
function updateDelivery() {
  const type = $('delivery').value;
  const pickup = $('pickup');
  // 校園自取已移除；只保留企業／社區集中取貨及低溫宅配。
  pickup.replaceChildren(
    ...selectOptions(['宜蘭企業 Hub（據點待確認）', '社區集中配送點（據點待確認）'])
  );
  $('pickup-group').hidden = type === 'home';
  $('address-group').hidden = type !== 'home';
  for (const id of ['city', 'district', 'address']) $(id).required = type === 'home';
  pickup.required = type === 'hub';
  $('delivery-note').textContent = type === 'hub'
    ? '試算採每箱 NT$80 的企劃集中配送成本假設；正式收費和集運點尚待確認。'
    : '低溫宅配費用與可配送區域尚未確認；目前僅顯示商品小計。';
  calculate();
}
function calculate() {
  const q = Number($('quantity').value);
  const valid = Number.isInteger(q) && q>=1 && q<=1000;
  const subtotal = valid ? q*UNIT_PRICE : 0;
  const isHub = $('delivery').value==='hub';
  const fee = isHub ? q*HUB_FEE_PER_BOX : null;
  $('sum-qty').textContent = valid ? `${q} 箱` : '請輸入 1～1000 箱';
  $('sum-subtotal').textContent = valid ? money(subtotal) : '—';
  $('sum-shipping').textContent = valid && fee !== null ? `${money(fee)}（假設）` : '待確認';
  $('sum-total').textContent = !valid ? '—' : fee === null ? `${money(subtotal)} 起` : `${money(subtotal+fee)}（試算）`;
  $('summary-disclaimer').textContent = isHub
    ? '此金額含企劃假設的集中配送成本，並非正式報價。'
    : '此金額僅是商品小計下限，未包括待確認的配送費用。';
  return {valid,q,subtotal,fee};
}
$('buyer-type').addEventListener('change',()=>{const b=$('buyer-type').value==='business';$('business-fields').hidden=!b;$('company').required=b;});
if(new URLSearchParams(location.search).get('type')==='business'){$('buyer-type').value='business';$('business-fields').hidden=false;$('company').required=true;$('delivery').value='hub';}
$('delivery').addEventListener('change',updateDelivery);
$('quantity').addEventListener('input',calculate);
updateDelivery();
$('order-form').addEventListener('submit',event=>{
  event.preventDefault();
  const pricing=calculate();
  const form=$('order-form');
  if (!pricing.valid || !form.checkValidity()) {
    $('error-message').hidden=false;
    $('error-message').textContent='請填寫所有必填欄位，確認箱數為 1～1000 的整數，並檢查電子郵件格式。';
    if (!pricing.valid) $('quantity').focus(); else form.reportValidity();
    return;
  }
  $('error-message').hidden=true;
  const type=$('delivery').value;
  const location=type==='home' ? `${$('city').value.trim()}${$('district').value.trim()}${$('address').value.trim()}` : $('pickup').value;
  const details=[
    ['訂購身分',$('buyer-type').value==='business'?'企業／教職員團購':'一般消費者'],...($('buyer-type').value==='business'?[['團購單位',$('company').value.trim()]]:[]),['飲食偏好',$('diet').value],['訂購類型',$('frequency').value],['商品','永續福利訂閱箱'],['箱數',`${pricing.q} 箱`],
    ['商品小計',money(pricing.subtotal)],['配送方式',$('delivery').selectedOptions[0].textContent],
    ['配送地點',location],['配送費',pricing.fee===null?'待報價':`${money(pricing.fee)}（試算）`],
    ['預估總計',pricing.fee===null?money(pricing.subtotal)+' 起':money(pricing.subtotal+pricing.fee)+'（試算）'],
    ['姓名',$('customer').value.trim()],['電話',$('phone').value.trim()]
  ];
  const parent=$('preview-details'); parent.replaceChildren();
  for(const [label,value] of details){const p=document.createElement('p');p.className='preview-line'; const b=document.createElement('strong');b.textContent=label+'：';p.append(b,document.createTextNode(value));parent.append(p);}
  $('confirmation').setAttribute('aria-labelledby','confirmation-title');
  document.querySelector('#confirmation .confirm-content').hidden=false;
  $('order-success').hidden=true;
  $('confirmation').showModal();
});
$('close-confirm').addEventListener('click',()=>$('confirmation').close());
$('finish-order').addEventListener('click',()=>{
  document.querySelector('#confirmation .confirm-content').hidden=true;
  $('order-success').hidden=false;
  $('confirmation').setAttribute('aria-labelledby','order-success-title');
  $('success-home').focus();
});
$('success-home').addEventListener('click',()=>{window.location.href='index.html';});
