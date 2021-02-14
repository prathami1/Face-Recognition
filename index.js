let select = document.querySelectorAll('.card')
let dis = document.querySelectorAll('.card-dis')
let reddit = document.querySelectorAll('.reddit')
let uses = document.querySelectorAll('.uses')
let version = document.querySelectorAll('.version')
let count = document.querySelectorAll('.count')
let support = document.querySelector('#support')
let isSupported = false
let parser = new UAParser(); let res = parser.getResult()
console.log(res)
if (res.os.name.toUpperCase() === 'IOS') { if (res.os.version.indexOf('13') === -1) { isSupported = true } else if (res.os.version.indexOf('12') === -1) { isSupported = 'kinda' } } else { isSupported = false }
if (isSupported) {
    if (res.browser.name.toUpperCase().indexOf('MOBILE SAFARI') == -1) { support.innerText = 'Please visit the URL in Chrome' } else {
        support.innerText = 'Your browser is not supported'
        support.style.backgroundColor = '#e4b320'
    }
} else if (!isSupported) {
    support.innerText = 'Your browser is supported'
    support.style.backgroundColor = '#00FF00'
} else {
    support.innerText = 'Your browser is supported'
    support.style.backgroundColor = '#00FF00'
}