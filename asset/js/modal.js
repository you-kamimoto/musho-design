document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById('modal');
  const mainImg = document.querySelector('.modal__main-img img');
  const thumbsWrap = document.querySelector('.modal__thumbs');
  const linkEl = document.querySelector('.modal__link a');
  const closeBtn = document.querySelector('.modal__close');
  const items = document.querySelectorAll('.list__li');

  // ===== 仮JSONデータ =====
  const worksData = [
    {
      slug: "kokubunji",
      title: "国分寺の家 - Architecture by SHIMOKAWA",
      link: "#",
      images: [
        "./asset/img/works/01/01.jpg",
        "./asset/img/works/01/02.jpg",
        "./asset/img/works/01/03.jpg",
        "./asset/img/works/01/04.jpg",
        "./asset/img/works/01/05.jpg",
        "./asset/img/works/01/06.jpg",
        "./asset/img/works/01/07.jpg",
        "./asset/img/works/01/08.jpg",
        "./asset/img/works/01/09.jpg"
      ]
    },
    {
      slug: "moonstar",
      title: "MOONSTAR - Architecture by SHIMOKAWA",
      link: "#",
      images: [
        "./asset/img/works/02/01.jpg",
        "./asset/img/works/02/02.jpg",
        "./asset/img/works/02/03.jpg",
        "./asset/img/works/02/04.jpg",
        "./asset/img/works/02/05.jpg",
        "./asset/img/works/02/06.jpg"
      ]
    },
    {
      slug: "yatsugadake",
      title: "八ヶ岳の家 / 吉村順三(1989年) - Architecture by SHIMOKAWA",
      link: "#",
      images: [
        "./asset/img/works/03/01.jpg",
        "./asset/img/works/03/02.jpg",
        "./asset/img/works/03/03.jpg",
        "./asset/img/works/03/04.jpg",
        "./asset/img/works/03/05.jpg"
      ]
    },
    {
      slug: "sobaya",
      title: "蕎麦屋 - Architecture by SHIMOKAWA",
      link: "#",
      images: [
        "./asset/img/works/04/01.jpg",
        "./asset/img/works/04/02.jpg",
        "./asset/img/works/04/03.jpg",
        "./asset/img/works/04/04.jpg",
        "./asset/img/works/04/05.jpg",
        "./asset/img/works/04/06.jpg"
      ]
    },
    {
      slug: "takenokuma",
      title: "喫茶 竹の熊 - Architecture by SHIMOKAWA",
      link: "#",
      images: [
        "./asset/img/works/05/01.jpg",
        "./asset/img/works/05/02.jpg",
        "./asset/img/works/05/03.jpg",
        "./asset/img/works/05/04.jpg",
        "./asset/img/works/05/05.jpg",
        "./asset/img/works/05/06.jpg",
        "./asset/img/works/05/07.jpg"
      ]
    }
  ];


  // ===== モーダルを開く =====
  items.forEach(li => {
    li.addEventListener('click', () => {

      const slug = li.dataset.slug;
      const data = worksData.find(w => w.slug === slug);


      // メイン画像
      mainImg.src = data.images[0];

      // サムネ生成前にリセット
thumbsWrap.innerHTML = ''; // ←ここを追加

data.images.forEach((src, i) => {
  const liEl = document.createElement('li');
  const img = document.createElement('img');

  img.src = src;

  if (i === 0) liEl.classList.add('is-active');

  img.addEventListener('click', () => {
    mainImg.src = src;

    thumbsWrap.querySelectorAll('li').forEach(el => el.classList.remove('is-active'));
    liEl.classList.add('is-active');
  });

  liEl.appendChild(img);
  thumbsWrap.appendChild(liEl);
});

      // テキストリンク
      linkEl.textContent = data.title;
      linkEl.href = data.link;

      // 表示
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // ===== 閉じる =====
  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

});
