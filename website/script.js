function $(q){return document.querySelector(q)}
function renderShell(active){
  const c=CONTACT,lang=localStorage.getItem('lang')||'en',t=I18N[lang];
  document.body.insertAdjacentHTML('afterbegin',`
  <div class="offer">${t.offer}</div>
  <header class="header">
    <a class="brand" href="index.html"><span class="badge">K</span><span><h1>Kubota Authorized Dealer</h1><p>Bhanvad | Khambhadiya</p></span></a>
    <nav class="nav">
      ${[['index.html','Home'],['about.html','About'],['tractors.html','All Tractors'],['spare-parts.html','Spare Parts'],['finance.html','Finance/EMI'],['gallery.html','Gallery'],['testimonials.html','Testimonials'],['contact.html','Contact'],['inquiry.html','Book Demo']].map(([u,n])=>`<a class="${active===u?'active':''}" href="${u}">${n}</a>`).join('')}
    </nav>
    <div class="actions">
      <select id="lang"><option value="en">English</option><option value="gu">ગુજરાતી</option><option value="hi">हिंदी</option></select>
      <a class="btn btn-outline" href="tel:${c.phone}">${t.call}</a>
      <a class="btn btn-primary" href="https://wa.me/${c.whatsapp}" target="_blank">${t.wa}</a>
    </div>
  </header>`);
  $('#lang').value=lang; $('#lang').onchange=e=>{localStorage.setItem('lang',e.target.value);location.reload()}
  document.body.insertAdjacentHTML('beforeend',`
  <footer class="footer">
    <div><h3>Authorized Kubota Dealer</h3><p>Trusted by farmers for tractor sales, genuine spare parts, and service support for many years.</p></div>
    <div><h4>Branches</h4><p>Bhanvad Main Showroom</p><p>Khambhadiya Branch</p></div>
    <div><h4>Quick Contact</h4><p>${c.phone}</p><p>${c.email}</p><a class="btn btn-primary" href="inquiry.html">Book Demo</a></div>
  </footer>
  <div class="sticky"><a href="tel:${c.phone}">📞 ${t.call}</a><a href="https://wa.me/${c.whatsapp}" target="_blank">💬 ${t.wa}</a></div>`)
}
function renderModelCards(){
  return MODELS.map(m=>`<article class="card"><img src="${m.img}" alt="${m.name}"><h3>${m.name}</h3><p class="muted">${m.hp} • ${m.engine}</p><p>${m.usage}</p><div class="row"><a class="btn btn-outline" href="tractor-${m.slug}.html">View Details</a><a class="btn btn-primary" href="https://wa.me/${CONTACT.whatsapp}?text=I am interested in ${encodeURIComponent(m.name)}" target="_blank">WhatsApp Inquiry</a></div></article>`).join('')
}
function bindForms(){document.querySelectorAll('form[data-lead]').forEach(f=>{f.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(f).entries());data.page=location.pathname;data.createdAt=new Date().toISOString();data.automationHooks={googleSheets:true,email:true,whatsapp:true,webhook:true};console.log('Lead payload:',data);alert('Thank you! Inquiry submitted.');f.reset();})})}
