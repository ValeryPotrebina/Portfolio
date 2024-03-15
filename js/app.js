$(function () {


    // Filter
    // Сохранены элементы у которых, дата атрибут data-filter
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        // Убрать предыдущие действия ссылки
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hideit');
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hideit');
                } else {
                    $(this).removeClass('hideit');
                }
            });
        }
    })
});


//Modal

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
    event.preventDefault();
    let $this = $(this)
    let modalId = $this.data('modal')

    $(modalId).addClass('show');
    $("body").addClass('no-scroll')
});

modalClose.on("click", function (event) {
    event.preventDefault();
    let $this = $(this)
    let modalParent = $this.parents('.modal')
    modalParent.removeClass('show');
    $("body").removeClass('no-scroll')
});

