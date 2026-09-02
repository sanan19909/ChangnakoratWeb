/* ==========================================================================
   ⚡ ไฟล์คำสั่ง JavaScript หลัก (main.js)
   - ระบบเปิด/ปิดเมนโหมดมือถือ (Mobile Menu Toggle)
   - ระบบสไลเดอร์เลื่อนผลงานซ้าย-ขวา
   - ระบบป๊อปอัพแกลเลอรีรูปภาพเพิ่มเติมสำหรับหน้า services.html
   - ระบบคลิกดูรูปภาพแบบขยายเต็มจอ (Full Image Modal)
   อ่านง่าย ทำงานเร็ว ไม่ซับซ้อน
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. ดึงองค์ประกอบของเมนูปุ่ม Hamburger และรายการเมนู
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // ✏️ ระบบกดเปิด-ปิดเมนูบนหน้าจอมือถือ (Mobile Menu Toggle)
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      const icon = hamburger.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // ✏️ เมื่อกดเลือกเมนูใดเมนูหนึ่งบนมือถือ ให้ปิดแถบเมนูลงอัตโนมัติ
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
      });
    });
  }

  // 2. ไฮไลต์เมนูตามชื่อไฟล์ HTML ปัจจุบันอัตโนมัติ
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ==========================================
  // ✏️ 3. ระบบกดปุ่มลูกศรเลื่อนสไลเดอร์ผลงานซ้าย-ขวา ในหน้า index.html
  // ==========================================
  const worksSliderTrack = document.getElementById('worksSliderTrack');
  const scrollLeftArrow = document.getElementById('scrollLeftArrow');
  const scrollRightArrow = document.getElementById('scrollRightArrow');

  if (worksSliderTrack && scrollLeftArrow && scrollRightArrow) {
    const getScrollDistance = () => {
      const card = worksSliderTrack.querySelector('.service-card');
      return card ? card.offsetWidth + 25 : 340;
    };

    scrollLeftArrow.addEventListener('click', () => {
      worksSliderTrack.scrollBy({
        left: -getScrollDistance(),
        behavior: 'smooth'
      });
    });

    scrollRightArrow.addEventListener('click', () => {
      worksSliderTrack.scrollBy({
        left: getScrollDistance(),
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // ✏️ 4. ข้อมูลรูปภาพเพิ่มเติมสำหรับหน้า services.html
  // คุณสามารถเพิ่ม/เปลี่ยน URL รูปภาพเพิ่มเติมสำหรับแต่ละบริการได้ที่นี่
  // ==========================================
  const galleryData = {
    gallery1: {
      title: "รูปภาพผลงานเพิ่มเติม: ติดตั้งระบบแสงสว่างและปลั๊กไฟบ้าน",
      images: [
        { src: "image/LINE_ALBUM_👁️_260902_2.jpg", caption: "" },
        { src: "image/LINE_ALBUM_👁️_260902_3.jpg", caption: "" },
        { src: "image/LINE_ALBUM_👁️_260902_4.jpg", caption: "" },
        { src: "image/LINE_ALBUM_👁️_260902_7.jpg", caption: "" }
      ]
    },
    gallery2: {
      title: "รูปภาพผลงานเพิ่มเติม: 'งานเดินสายตู้คอนโทรลอาคาร'",
      images: [
        { src: "image/714840136_2433547710474700_2198903330868308908_n.jpg", caption: "ประกอบตู้ไฟหลัก MDB และจัดเก็บสายอย่างเป็นระเบียบ" },
        { src: "image/715790294_2433548903807914_6460136027973217372_n.jpg", caption: "ติดตั้งเบรกเกอร์กันดูด RCBO เพิ่มความปลอดภัย" },
        { src: "image/715464965_2433548327141305_2044581326654456767_n.jpg", caption: "ตรวจวัดค่านำไฟฟ้าและระบบสายดินตู้ไฟ" },
        { src: "image/717257991_2433548690474602_3883703704673163932_n.jpg", caption: "ตรวจวัดค่านำไฟฟ้าและระบบสายดินตู้ไฟ" },
        { src: "image/716885942_2433549350474536_2137370050011762726_n.jpg", caption: "ตรวจวัดค่านำไฟฟ้าและระบบสายดินตู้ไฟ" },
        { src: "image/717167961_2433549230474548_4641505003814595521_n.jpg", caption: "ตรวจวัดค่านำไฟฟ้าและระบบสายดินตู้ไฟ" },
        
        
      ]
    },
    gallery3: {
      title: "รูปภาพผลงานเพิ่มเติม: การติดตั้งแอร์คอนโทรลเลอร์",
      images: [
        { src: "image/733882505_2458073954688742_1692098632740066773_n.jpg", caption: "" },
        { src: "image/771757151_122223220640336340_2941904522473458650_n.jpg", caption: "" },
        { src: "image/766979898_122223225728336340_3540720103328889400_n.jpg", caption: "" },
        { src: "image/733737284_2458073768022094_8849659420854685321_n.jpg", caption: "" },
        { src: "image/775261033_122223737474336340_918644407579701397_n.jpg", caption: "" },
      ]
    },
    gallery4: {
      title: "รูปภาพผลงานเพิ่มเติม: ติดตั้งระบบโซล่าเซลล์",
      images: [
        { src: "image/766799366_2493334341162703_2085840240033783269_n.jpg", caption: "" },
        { src: "image/632116241_2329519817544157_4452126059645839382_n.jpg", caption: "" },
        { src: "image/627781826_2329520510877421_5048656796573330820_n.jpg", caption: "" },
        { src: "image/632275628_2329519607544178_4301112156104588041_n.jpg", caption: "" },
      ]
    }
  };

  const galleryModal = document.getElementById('galleryModal');
  const galleryTitle = document.getElementById('galleryTitle');
  const galleryGrid = document.getElementById('galleryGrid');
  const closeGalleryBtn = document.getElementById('closeGalleryBtn');

  // ดึงองค์ประกอบสำหรับดูรูปภาพแบบขยายเต็มจอ (Full Image Lightbox)
  const fullImageModal = document.getElementById('fullImageModal');
  const fullImageSrc = document.getElementById('fullImageSrc');
  const fullImageCaption = document.getElementById('fullImageCaption');
  const closeFullImageBtn = document.getElementById('closeFullImageBtn');

  // ✏️ ฟังก์ชั่นเปิดดูรูปภาพแบบขยายเต็มจอ
  const openFullImage = (src, caption) => {
    if (!fullImageModal || !fullImageSrc) return;
    fullImageSrc.src = src;
    if (fullImageCaption) fullImageCaption.textContent = caption || '';
    fullImageModal.classList.add('active');
  };

  // ✏️ ฟังก์ชั่นปิดรูปภาพแบบขยายเต็มจอ
  const closeFullImage = () => {
    if (fullImageModal) {
      fullImageModal.classList.remove('active');
    }
  };

  // ✏️ ฟังก์ชั่นเปิดป๊อปอัพแกลเลอรีรูปภาพ
  const openGallery = (galleryKey) => {
    const data = galleryData[galleryKey];
    if (!data || !galleryModal || !galleryTitle || !galleryGrid) return;

    galleryTitle.textContent = data.title;
    galleryGrid.innerHTML = '';

    data.images.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'gallery-item';
      itemEl.innerHTML = `
        <img src="${item.src}" alt="${item.caption}">
        <div class="gallery-item-caption">
          <span>${item.caption}</span>
        </div>
      `;

      // เมื่อกดที่รูปภาพรายการใดย่อย ให้เปิดดูแบบขยายเต็มจอ
      itemEl.addEventListener('click', () => {
        openFullImage(item.src, item.caption);
      });

      galleryGrid.appendChild(itemEl);
    });

    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // ✏️ ฟังก์ชั่นปิดป๊อปอัพแกลเลอรีรูปภาพ
  const closeGallery = () => {
    if (galleryModal) {
      galleryModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // ผูกอีเวนต์คลิกให้กับปุ่มดูรูปภาพเพิ่มเติม และรูปภาพการ์ด
  document.querySelectorAll('[data-gallery]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const galleryKey = trigger.getAttribute('data-gallery');
      openGallery(galleryKey);
    });
  });

  // ปิดแกลเลอรีเมื่อกด X หรือกดนอกกล่อง
  if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener('click', closeGallery);
  }

  if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
      if (e.target === galleryModal) {
        closeGallery();
      }
    });
  }

  // ปิดรูปภาพแบบขยายเต็มจอเมื่อกด X หรือกดนอกภาพ
  if (closeFullImageBtn) {
    closeFullImageBtn.addEventListener('click', closeFullImage);
  }

  if (fullImageModal) {
    fullImageModal.addEventListener('click', (e) => {
      if (e.target === fullImageModal || e.target.classList.contains('full-image-container')) {
        closeFullImage();
      }
    });
  }
});
