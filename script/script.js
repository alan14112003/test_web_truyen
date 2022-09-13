const run = () => {
    // -------------------------attribute
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const showMenuBarCheck = $('#showMenuBarCheck')
    const bars = $('.bars')
    const close = $('.close')
    const headerBottomNav = $('.mobile .header__bottom__nav')
    // ----------darkMode 
    const body = $('body')
    const darkBtns = $$('.header__top__dark_mode')
    // ----------showSubNavBtn
    const showSubnavBtns = $$('.show__subnav__btn')
    // ----------form login
    const loginBtns = $$('.top__info__login')
    const formLoginClose = $('.header__form--login .form__close')
    // ----------------------------------methods
    // ----------showMenuBar
    function showMenuBar() {
        if (showMenuBarCheck.checked) {
            bars.style.display = 'none'
            close.style.display = 'block'
            headerBottomNav.classList.add('open')
        }
        else {
            close.style.display = 'none'
            bars.style.display = 'block'
            headerBottomNav.classList.remove('open')
        }
    }
    // ----------Dark Mode 
    function setDark() {
        localStorage.getItem('darkMode') == 'dark' ? body.classList.add('dark') : body.classList.remove('dark')
    }
    function darkModeHandler() {
        localStorage.getItem('darkMode') == 'dark' ? localStorage.setItem('darkMode', 'light') : localStorage.setItem('darkMode', 'dark')
        setDark()
    }
    // ----------Show SubNav
    function showSubnav(btn) {
        const subnav = btn.parentElement.querySelector('.header__bottom__subnav')
        btn.classList.contains('open') ? btn.classList.remove('open') : btn.classList.add('open')
        if (subnav)
            subnav.classList.contains('open') ? subnav.classList.remove('open') : subnav.classList.add('open')
    }
    // ----------Mở form login
    function showFormLogin(e) {
        e.stopPropagation()
        let formLogin = $('.header__form--login')
        formLogin.classList.contains('open') ? formLogin.classList.remove('open') : formLogin.classList.add('open')
    }
    // -------------------------------call methods
    showMenuBarCheck.onchange = showMenuBar
    // ----------darkMode
    window.onload = setDark
    darkBtns.forEach(darkBtn => {
        darkBtn.onclick = darkModeHandler
    });
    // ----------showSubnav
    showSubnavBtns.forEach(showSubnavBtn => {
        showSubnavBtn.onclick = () => {
            showSubnav(showSubnavBtn)
        }
    })
    // ----------Mở form login
    loginBtns.forEach(btn => {
        btn.onclick = showFormLogin
    })
    formLoginClose.onclick = showFormLogin
}

run()