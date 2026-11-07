const SYSTEMS=[["Anubis", "http://anubis/cgi-bin/pmsnew/pms_main.cgi"], ["RETENTION", "https://ccf.yettel.bg/ccf/"], ["EPOS", "https://e-pos.yettel.bg/epos/"], ["CX", "http://cx.yettel.bg/CustCare/func/wcs/Login.jsp"], ["CCS", "http://172.16.3.98/ccs/creditlimit/cl.jsp"], ["InternationalNumbering", "https://www.numberingplans.com/"], ["Services", "http://services.globul.bg/admin/"], ["DAXY", "http://172.16.3.197/daxyglobal.html"], ["BPA(billing)", "https://bpa.globul.bg/bpa/billing"], ["CETIN", "https://sm.cetin.rs/"], ["APP", "http://172.16.217.197:8080/ords/f?p=102:LOGIN_DESKTOP::::::"], ["Siebel", "https://crmprod.yettel.bg:4443/siebel/app/ecommunications_sso/enu"], ["ЛАКОРДА", "https://web.lakorda.com/lakorda/?main=1&db=1&auth=20180714082220526det1gsqx9iem2ze2925"], ["ATM(плащания)", "http://192.168.0.64/acs/last2d.cgi"], ["E-shop", "https://shop.yettel.bg/bg/adminmanage"], ["Налети суми", "https://172.16.227.26/RAS/log_load.jsp"], ["Fraud Alarms", "https://fraudapp.yettel.bg/home"], ["Проверка за валидност ЕГН", "https://georgi.unixsol.org/programs/egn.php?a=check"]];
const TEMPLATES={"Коментар CX(memos)": ["Do not unbar until xxxx euro paid.Very high xxxxx (VAS например )usage. Do not unbar until xxxx euro paid", "Do not unbar until *** euro paid or contact credit control KA informed", "Limit = *** euro. until **** paid on time invoices.", "not loaded gprs/voice/sms *******(country name)  ****-**-**   **:**:** -  ****-**-**  **:**:** ~ хххх euro"], "Коментар CCS": ["Промяна на лимит по желание на клиента  :\n                    Уведомяваме Ви,че лимитът Ви е променен на хххх евро.Йетел", "При активиране на карти след сторно :\n                    Вашите изходящи услуги са активирани отново. Благодарим Ви за направеното плащане.Йетел", "Спрени за кр лимит :\n                    Вие надвишихте кредитния лимит и изходящите услуги са спрени. За детайли https://yttl.bg/Pay, my.yettel.bg или *123*4*6#. За повече информация свързана с кредитния лимит https://yttl.bg/CL", "Спрени за Fraud :\n                    Изходящите  Ви услуги са спрени. Проверете дължимото на *123*4*6#. За повече информация https://yttl.bg/CL", "Корпоративни клиенти отделни карти при FA :\n                    Уведомяваме Ви,че по картата Ви е регистрирано високо потребление.Моля да направите плащане от хххх евро.Йетел", "Промяна на лимит по наша преценка :\n                    По преценка на отдела за кредит контрол ,кредитният Ви лимит е ххххх евро.Може да бъде възстановен по Ваше желание след хххх платени в срок фактури.Йетел", "STAFF USAGE\n                    Уведомяваме Ви,че по служебната Ви карта е регистрирано високо потребление. За повече информация пишете на CreditControl@yettel.bg", "STAFF LIMIT\n                    Уведомяваме Ви,че достигнахте лимита на безплатното си потребление по служебната си карта.За повече информация пишете на CreditControl@yettel.bg", "STAFF FAMILY\n                    Уведомяваме Ви,че по една от картите Ви  е регистрирано високо потребление. За повече информация пишете на CreditControl@yettel.bg"], "Email KA": ["Здравейте Колеги,\nМоля за проверка, дали номер ******* е в списъците за корекция на билшок. Предварително ви благодаря.!!!!\n", "Номерът е активиран с постпон до билинг", "Привет,\nНомер 359***** е активиран и оставен постпон за ден.\nЗа удължаване на постопона може да се обърнеш в работно време към Вики и Пиронков.\n", "Здравейте,\nСпираме ли го:\nCompany:  ХХХХХХХ\nMSISDN: ХХХХХХХ\nUBE: not loaded gprs/voice/sms *******(country name)  ****-**-**   **:**:** -  ****-**-**  **:**:** ~ хххх euro\nAlarm: *******\n                    Моля за обратна връзка в случай на искане да кредитираме клиента за бил-шок.\n", "Привет,\nТози номер е спрян поради високо потребление на УДС\nCompany:  xxxxxxxxxx\nMSISDN: xxxxxxxxxx\nUBE: *** euro\nAlarm: VAS\n"], "Текст към Cetin (non active)": ["Hi,\nWe have customers in status “B”(barring of outgoing services) with gprs usage after barring.\nPls note that  MSISDNs in \"yes \" column are already sent.\n", "Hi,\nWe have customers in status “B”(barring of outgoing services) with VOICE usage after barring.\nPls note that  MSISDNs in \"yes \" column are already sent.\n"]};
const SQL_DATA=[
  {database:"SCORE",title:"Заявка SQL: проверяваме дали е паднал флагът",popup:"windowpopup7.html",queries:[
    {label:"Проверка по ЕГН",sql:"select *\nfrom f_white_list\nWHERE egn ='****'"},
    {label:"Проверка по Булстат",sql:"select *\nfrom stage_scoring.f_white_list_pros\nWHERE bulstat ='****'"}
  ]},
  {database:"CCS.HUNTER.world",title:"Заявка SQL: проверка на POS код за E-shop",popup:"windowpopup8.html",queries:[
    {label:"Проверка на POS код",sql:"select *\nfrom CCS3.BILLABLE_ACCOUNTS\nWHERE sent_to_post_code ='1799'"}
  ]},
  {database:"SCORE DEV",title:"Заявка SQL: проверка колко предплата иска системата",popup:"windowpopup9.html",queries:[
    {label:"Проверка по ЕГН",sql:"select *\nfrom ONLINE_SCORING.P_ALL_LOGS_CONS t\nWHERE egn ='*****'"},
    {label:"Проверка по Булстат",sql:"select *\nfrom ONLINE_SCORING.P_ALL_LOGS_PROS t\nwhere bulstat = 'xxxxxxxxxx'"},
    {label:"Заявка Мария",sql:"select *\nfrom (mstancheva.score_wf_log_cons ('XXXXXXXX' , 5))"}
  ]}
];
const POPUPS={"База: SCORE": "windowpopup7.html", "База: CCS.HUNTER.world": "windowpopup8.html", "База: SCORE DEV": "windowpopup9.html", "WhiteFlag Check! ЕГН/Булстат": "windowpopup.html", "WhiteFlag Check!БЮДЖЕТ Булстат:": "windowpopup2.html", "Credit Limit Change:": "windowpopup3.html", "YES LOGIC": "windowpopup4.html", "NO LOGIC": "windowpopup5.html", "WhiteFlag RULES:": "windowpopup6.html"};
const GENERAL_NOTES=[
"E-shop / коментар: отказваме, клиентът има просрочена фактура и трябва да я заплати; моля, свържете се с клиента.",
"Бюджет / коментар: ако сформираният бюджет е под 5 и 5, проверяваме Булстата дали е OK.",
"Тикет / коментар: системата не показва да сте правили опити за подобни сделки преди да поискате WhiteFlag. Некоректно сте използвали флага, който сме разрешили за друга сделка. Можете да използвате канала за квота на ЗМ."
];
const ROBOT_STEPS=["TERMINATION","CL WARNING 7 DAYS AGO","WF CHECK","OpenWF Check","CL BARRING RED POSPONE"];
const SQL_EXAMPLES=[
["ЕГН","select *\nfrom f_white_list\nWHERE egn = '****'"],
["Булстат","select *\nfrom stage_scoring.f_white_list_pros\nWHERE bulstat = '****'"],
["POS код","select *\nfrom CCS3.BILLABLE_ACCOUNTS\nWHERE sent_to_post_code = '1799'"],
["Проверка на логове — ЕГН","select *\nfrom ONLINE_SCORING.P_ALL_LOGS_CONS t\nWHERE egn = '*****'"],
["Проверка на логове — Булстат","select *\nfrom ONLINE_SCORING.P_ALL_LOGS_PROS t\nwhere bulstat = 'xxxxxxxxxx'"],
["Заявка Мария","select *\nfrom (mstancheva.score_wf_log_cons ('XXXXXXXX', 5))"]
];
function renderSystems(){document.getElementById("systemsGrid").innerHTML=SYSTEMS.map(([name,url])=>`<a class="system-card searchable" href="${url}" target="_blank" rel="noopener noreferrer"><span class="feature-icon">◎</span><span><strong>${name}</strong><small>Отвори работната система</small></span><span class="out">↗</span></a>`).join("");}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function renderSQL(){
  const root=document.getElementById("sqlList");
  root.innerHTML=SQL_DATA.map((group,gi)=>`
    <section class="sql-database searchable">
      <div class="sql-database-heading">
        <div><span class="database-label">БАЗА ДАННИ</span><h2>${escapeHTML(group.database)}</h2><p>${escapeHTML(group.title)}</p></div>
        <button class="small-btn popup" data-popup="${escapeHTML(group.popup)}">Информация за базата ↗</button>
      </div>
      <div class="sql-query-list">
        ${group.queries.map((query,qi)=>`
          <article class="sql-query searchable">
            <div class="sql-query-heading"><strong>${escapeHTML(query.label)}</strong><span class="query-number">Заявка ${qi+1}</span></div>
            <pre class="sql-code">${escapeHTML(query.sql)}</pre>
            <div class="sql-actions"><button class="small-btn" data-copy-query="${gi}-${qi}">Копирай заявката</button></div>
          </article>`).join("")}
      </div>
    </section>`).join("");
  root.querySelectorAll("[data-copy-query]").forEach(button=>{
    button.addEventListener("click",()=>{
      const [gi,qi]=button.dataset.copyQuery.split("-").map(Number);
      copyText(SQL_DATA[gi].queries[qi].sql,button);
    });
  });
}
function renderTemplates(){const root=document.getElementById("templateSections");root.innerHTML=Object.entries(TEMPLATES).map(([group,texts])=>`<div class="template-group"><h2>${group}</h2>${texts.map((t,i)=>`<div class="template-item"><textarea readonly aria-label="${group} шаблон ${i+1}">${t.replace(/</g,"&lt;")}</textarea><button class="copy-btn" data-copy-template>Копирай текста</button></div>`).join("")}</div>`).join("");root.querySelectorAll("[data-copy-template]").forEach(b=>b.addEventListener("click",()=>copyText(b.previousElementSibling.value,b)));}
function renderNotes(){
  const root=document.getElementById("generalNotes");
  root.innerHTML=GENERAL_NOTES.map((note,i)=>`
    <article class="manual-note">
      <span class="note-index">${String(i+1).padStart(2,"0")}</span>
      <p>${escapeHTML(note)}</p>
    </article>`).join("");
}
function renderRobot(){document.getElementById("robotSteps").innerHTML=ROBOT_STEPS.map((x,i)=>`<article class="panel"><span class="feature-icon">${i+1}</span><strong>${x}</strong></article>`).join("");}
function copyText(text,button){navigator.clipboard?.writeText(text).then(()=>{const old=button.textContent;button.textContent="Копирано ✓";setTimeout(()=>button.textContent=old,1400)}).catch(()=>alert("Копирането не е разрешено от браузъра."));}
document.addEventListener("click",e=>{const b=e.target.closest(".popup");if(b){const f=b.dataset.popup;window.open(f,"cc_"+f,"width=520,height=600,resizable=yes,scrollbars=yes");}});
function showView(v){document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id==="view-"+v));document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.view===v));const a=document.querySelector(`[data-view="${v}"]`);document.getElementById("breadcrumbName").textContent=a?a.textContent.trim():"Начало";}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));document.querySelectorAll("[data-view-link]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.viewLink)));
document.getElementById("billingDays").addEventListener("click",e=>{if(e.target.tagName!=="BUTTON")return;document.querySelectorAll("#billingDays button").forEach(b=>b.classList.remove("selected"));e.target.classList.add("selected")});
document.querySelectorAll(".local-search").forEach(i=>i.addEventListener("input",()=>{const q=i.value.toLocaleLowerCase("bg");i.closest(".view").querySelectorAll(".searchable").forEach(x=>x.hidden=!x.textContent.toLocaleLowerCase("bg").includes(q))}));
document.getElementById("globalSearch").addEventListener("keydown",e=>{if(e.key!=="Enter")return;const q=e.target.value.toLocaleLowerCase("bg");const all=[...SYSTEMS.map(x=>x[0]),...SQL_DATA.map(x=>x.title),...Object.keys(TEMPLATES)];const target=all.some(x=>x.toLocaleLowerCase("bg").includes(q))?"systems":"systems";showView(target);const i=document.querySelector("#view-systems .local-search");i.value=e.target.value;i.dispatchEvent(new Event("input"))});
document.getElementById("mobileMenu").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("mobile-open"));
function updateClock(){const d=new Date();document.getElementById("clock").textContent=d.toLocaleTimeString("bg-BG",{hour:"2-digit",minute:"2-digit"});document.getElementById("todayDate").textContent=d.toLocaleDateString("bg-BG",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
renderSystems();renderSQL();renderTemplates();renderNotes();renderRobot();updateClock();setInterval(updateClock,1000);
