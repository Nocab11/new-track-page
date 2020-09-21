// Инициализация гугл карты
function initMap() {
    // The location of Uluru
    let geocoder = new google.maps.Geocoder();
    let uluru = {lat: 55.543684, lng: 37.525328};
    // The map, centered at Uluru
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    // Лишний кусок
    // geocoder.geocode( { 'address': '{{ destination }}' }, function (results, status) {
    //     if (status == 'OK') {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location
    //         });
    //     } else {
    //         document.getElementById('map').style.display = 'none';
    //     }
    // });

    let infoWnd = new google.maps.InfoWindow({
        // Обратные кавычки не работали в IE, пришлось так переносить
        content:
                '<div class="t-schedule__work">' +
                    '<span class="t-main-name">График работы:</span>' +
                    '<span class="t-main-description">пн-пт 10:00 - 20:00</span>' +
                    '<span class="t-main-description">сб-вс 10:00 - 16:00</span>' +
                '</div>' +
                    '<div class="t-schedule__tel">' +
                    '<span class="t-main-name">Телефон для связи:</span>' +
                    '<span class="t-main-description">8-499-390-58-53</span>' +
                '</div>'
    });
    infoWnd.open(map, marker);
}

// Открытие тултипа
function tooltipHandler () {

    let toolTip = document.querySelector('.js-t-tooltip');

    let toolTipBlock = document.querySelector('.t-tooltip-block');

    toolTip.addEventListener('click', function () {
        toolTipBlock.classList.toggle('t-tooltip_hidden');
    });

    document.addEventListener('click', function (e) {
        if (!toolTip.contains(e.target) && !toolTipBlock.contains(e.target)) {
            toolTipBlock.classList.add('t-tooltip_hidden');
        }
    });

}

tooltipHandler();

// Наложение зеленого слоя и размещение кружка относительно активного статуса
function statusLine() {
    let item_active = document.querySelectorAll('.item_active');
    let item_active_last = (item_active[item_active.length-1]);
    let item_last_center = (item_active[item_active.length-1]).clientHeight / 2;
    let circle_center = item_active_last.offsetTop;
    let height_all = circle_center + item_last_center;
    document.querySelector('.t-clause__line-green').style.height = height_all + "px";
}

statusLine();

function getHeightBlock() {
    let location_block = document.querySelector('.t-location');
    let details_block = document.querySelector('.t-details');
    if (details_block.offsetHeight > location_block.offsetHeight) {
        location_block.style.height = details_block.offsetHeight + 'px';
    }
}

getHeightBlock();