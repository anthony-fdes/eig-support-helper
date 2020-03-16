scriptTxt = `const observerCallback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList' && document.getElementById('sessionDiv') != null) {
          bsspl();
        }
    }
};
const observer = new MutationObserver(observerCallback);
observer.observe(document.getElementById('sm-dashboard'), {attributes:true,childList:true,subtree:true});

function bsspl() {
  mainList = document.querySelector(".session-props");
  if(mainList == null) return;
  
  li = document.querySelector('.session-props .bah-public-link');
  if(li != null) return;
  
  id = document.querySelector("#accessKeys .bs-selectable").innerHTML;
  key = document.querySelector("#accessKeys li:nth-child(2) .bs-selectable").innerHTML;

  title = document.createElement('span');
  title.setAttribute('class', 'title');
  title.innerHTML = "Public URL";

  val = document.createElement('span');
  val.setAttribute('class', 'val');

  getLink = document.createElement('a');
  getLink.setAttribute("style", "cursor: pointer;")
  getLink.innerHTML = "Get Public Link";
  getLink.onclick = bsspl_getURL;

  retryLink = document.createElement('a');
  retryLink.setAttribute("style", "cursor: pointer;")
  retryLink.innerHTML = "Error: Retry";
  retryLink.onclick = bsspl_getURL;

  val.appendChild(getLink);

  li = document.createElement('li');
  li.appendChild(title);
  li.appendChild(val);
  li.setAttribute("class", "bah-public-link");
  mainList.appendChild(li);

  function bsspl_getURL() {
    val.innerHTML = 'Loading...';
    link = 'https://' + id + ':' + key + document.location.href.split('https://').join('@') + '.json';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', link, true);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          
          val.innerHTML = '';
          
          plink = document.createElement('a');
          plink.setAttribute('href', obj.automation_session.public_url);
          plink.setAttribute('target', '_blank');
          plink.innerHTML = obj.automation_session.public_url;
          val.appendChild(plink);
          
          val.appendChild(document.createElement('br'));

          cpybtn = document.createElement('button');
          cpybtn.innerHTML = "Copy URL";
          cpybtn.setAttribute('class', 'create-issue btn-automate btn-automate--create-issue');
          cpybtn.setAttribute('style', 'color:#fff; margin-top:0.5em;');
          cpybtn.onclick = function() {
            bsspl_copyToClipboard(obj.automation_session.public_url);
            cpybtn.innerHTML = "Copied";
            setTimeout(()=>{
              cpybtn.innerHTML = "Copy URL";
            }, 2000);
          }
          val.appendChild(cpybtn);

        } else {
          val.innerHTML = "";
          val.appendChild(retryLink);
        }
      }
    };
    xmlhttp.send(null);
  }

  function bsspl_copyToClipboard(text) {
      var dummy = document.createElement("textarea");
      // to avoid breaking orgain page when copying more words
      // cant copy when adding below this code
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
  }

}

setTimeout(bsspl, 2000);`;

var script = document.createElement('script');
script.textContent = scriptTxt;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);


