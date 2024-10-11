$('.carousel-three-items').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.carousel-one-item').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      
      {
        breakpoint: 540,
        settings: {
          arrows: false
        }
      }
    ]
  });
  


  $(document).ready(function() {
    // Применяем функционал для каждой секции отдельно
    $('#services, #menu-about').each(function() {
        var block = $(this);  // Сохраняем текущий блок

        // По умолчанию активируем первый элемент меню и изображение для каждой секции
        block.find('.service-carousel-image').first().addClass('active');
        block.find('.service-item').first().addClass('active');

        // При наведении на пункт меню
        block.find('.service-item').hover(function() {
            // Убираем активные классы у всех пунктов и изображений внутри текущей секции
            block.find('.service-item').removeClass('active');
            block.find('.service-carousel-image').removeClass('active');

            // Добавляем активные классы для текущего пункта и соответствующего изображения
            var targetIndex = $(this).data('target');
            $(this).addClass('active');
            block.find('.service-carousel-image').eq(targetIndex).addClass('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const target = this.getAttribute('data-target');
            const descriptionBlock = document.querySelectorAll('.testimonial-text')[target - 1];
            
            if (descriptionBlock.classList.contains('full')) {
                descriptionBlock.classList.remove('full');
                descriptionBlock.style.maxHeight = '6em'; // Вернуть высоту для короткого текста
                this.textContent = 'Read More';
            } else {
                descriptionBlock.classList.add('full');
                descriptionBlock.style.maxHeight = 'none'; // Убираем ограничение по высоте
                this.textContent = 'Read Less';
            }
        });
    });

    // Изначально показываем сокращенный текст для всех блоков
    const descriptionBlocks = document.querySelectorAll('.testimonial-text');
    descriptionBlocks.forEach(function (block) {
        block.style.maxHeight = '6em'; // Ограничиваем высоту для первых 4 строк
    });
});


