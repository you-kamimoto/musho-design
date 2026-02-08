// opening-anime
    const opening = document.querySelector('.openingAnm');

    // 開発用フラグtrue　本番false
    const forceShowOpening = false;

    if (!forceShowOpening && sessionStorage.getItem('openingPlayed')) {
      // 再生済みなら非表示
      opening.style.display = 'none'; // 初期表示させないだけ
    } else {
      // 毎回表示 or 初回再生
      opening.style.display = 'grid'; // grid を保持
      sessionStorage.setItem('openingPlayed', 'true');
    }

//header-menu
    const btn = document.querySelector('.menu__btn');
    const header = document.getElementById('header');
    const menu = document.querySelector('.Gh');
    const body = document.body;
    const links = header.querySelectorAll('a');

    const openMenu = () => {
      header.classList.add('-show');
      menu.classList.add('is-open');
      body.classList.add('is-menu-open');

      setTimeout(() => {
        header.classList.add('is-finish');
      }, 100);
    };

    const closeMenu = () => {
      header.classList.remove('-show');
      menu.classList.remove('is-open');
      body.classList.remove('is-menu-open');

      setTimeout(() => {
        header.classList.remove('is-finish');
      }, 100);
    };

    const toggleMenu = () => {
      if (header.classList.contains('-show')) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    // ボタンで開閉
    btn.addEventListener('click', toggleMenu);

    // リンククリックで閉じる
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });



    //header-scroll
    const scrollHeader = document.getElementById('header');
    const hero = document.getElementById('Mv');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          scrollHeader.classList.add('-scroll');
        } else {
          scrollHeader.classList.remove('-scroll');
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(hero);

