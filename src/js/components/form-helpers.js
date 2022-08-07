const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/i;
const regNum = /^\d+$/;

export function validateForm($form) {
    let error = 0;
    $form.find('input:visible').each(function () {
        if (!$(this).hasClass('validate')) return true;

        if (!validateField($(this))) {
            error++;
        }
    });

    if (error > 0) {
        return false;

    } else {
        return true;
    }
}

export function validateField($field) {
    if (!$field.hasClass('validate')) return true;
    if ($field.hasClass('validate-disabled')) return true;

    const fieldId = $field.attr('id');


    let error = 0,
        message = '';

    let val = jQuery.trim($field.val()),
        plh = $field.attr('data-placeholder'),
        type = $field.attr('data-validate'),
        errorMessage = $field.attr('data-error_message');

    switch (type) {
        //required
        case 'required':
            if (!val) {
                error++;
                message = 'Field is required';
            }
            break;

        //numbers
        case 'number':
            val = getClearVal(val);
            if (val === '' || val.search(regNum) == -1) {
                error++;
                message = 'Only numbers';
            }
            break;


        //email
        case 'email':
            if (val == '' || val.search(regEmail) == -1 || val.length > 50) {
                error++;
                message = 'Invalid email';
            }
            break;

    }

    // custom error message
    if (errorMessage) message = errorMessage;

    console.log(type)

    // if incorrect filled
    // return
    if (error > 0) {
        $field.parents('.field').find('.error-message').html(message);
        $field.parents('.field').removeClass('success').addClass('error');

        return false;

    } else {
        $field.parents('.field').removeClass('error').addClass('success');
        $field.parents('.field').find('.error-message').text('');

        return true;
    }
}

// custom placeholders
export function initPlaceholders() {
    $('.placeholder').each(function () {
        if ($(this).hasClass('ready')) return;

        const $this = $(this);

        const $field = $this.parents('.field');
        const plh = $this.data('placeholder');
        const val = $.trim($this.val());
        if ((val == '' || val == plh) && plh != '' && plh != undefined) {
            $field.addClass('empty');

        } else {
            $field.removeClass('empty');
        }

        $field.prepend('<span class="label">' + plh + '</span>');

        $(this).addClass('ready');

        $(this)
            .on('focus', function () {

                var $this = $(this),
                    $field = $this.parents('.field'),
                    plh = $this.attr('data-placeholder'),
                    val = $.trim($this.val());

                if ($this.prop('readonly')) return false;

                if (val == '' || val == plh) {
                    $field.removeClass('empty');
                }
            })
            .on('blur', function () {
                var $this = $(this),
                    $field = $this.parents('.field'),
                    plh = $this.attr('data-placeholder'),
                    val = $.trim($this.val());

                if (val == '' || val == plh) {
                    $field.removeClass('error success').addClass('empty');

                } else {
                    $field.removeClass('empty');
                }
            });
    });
}


export function getClearVal(val) {
    let result = val.toString();
    result = result.replace('+7', '');
    result = result.replace(/[()\_\-\s]/g, '');
    return result;
}

export function clearForm($form) {
    $form.find('.validate').each(function () {
        const plh = $(this).data('placeholder') || '';
        $(this).val('').trigger('change').trigger('blur');
    });
}
