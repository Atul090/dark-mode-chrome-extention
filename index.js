
async function sayHello() {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: ()=>{
            alert("hello from my side ")
        }
    });
}

document.getElementById("myButton").addEventListener("click", sayHello);