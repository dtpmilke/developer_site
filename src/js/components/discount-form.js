import {clearForm, getClearVal, initPlaceholders, validateField, validateForm} from "./form-helpers";

export function initDiscountForm() {
    if ($('#discount_form').length) {
        const $form = $('#discount_form');
        const $phone = $form.find('#phone');
        const $email = $form.find('#email');
        const $name = $form.find('#name');

        initPlaceholders()

        $form.on('change', 'input', function () {
            validateField($(this))
        })

        $('.form-switchers').on('click', '.switcher', function () {
            const type = $(this).attr('data-type');
            $form.attr('data-type', type)
            $(this).toggleClass('active').siblings().removeClass('active')
            return false;
        })

        $form.on('submit', function () {
            if (!validateForm($form)) return false;

            submitForm()

            return false;
        })

        function submitForm() {
            $.ajax({
                url: $form.attr('action'),
                type: 'POST',
                data: serializeForm(),
                success: function () {
                    successForm()
                },
                error: function () {
                    errorForm()
                }
            })
        }

        function serializeForm() {
            const data = {
                name: getClearVal($name)
            }

            if ($form.attr('data-type') === 'phone') {
                data.phone = getClearVal($phone.val())
            }

            if ($form.attr('data-type') === 'email') {
                data.email = getClearVal($email.val())
            }

            return data
        }

        function successForm() {
            $form.removeClass('error-form').addClass('success-form')
            setTimeout(() => {
                clearDiscountForm()
            }, 2500)
        }

        function errorForm() {
            $form.removeClass('success-form').addClass('error-form')

            setTimeout(() => {
                clearDiscountForm()
            }, 2500)
        }

        function clearDiscountForm() {
            clearForm($form)
            $form.removeClass('success-form error-form')
        }
    }
}
