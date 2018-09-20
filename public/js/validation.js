$(document).ready(function () {
   $.validator.addMethod('enterPhoneno', function (value, element) {
          return this.optional(element)
          || value.length >= 10
          && /\d/g.test(value);
        }, 'Please enter valid phone no.')

          $('#chat-validation').validate({
            rules: {
              ["entry.635019513"]: {
                required: true
              },
              ["entry.352553147"]: {
                required: true,
                email: true
              },
              ["entry.676157046"]: {
                required: true,
                enterPhoneno: true
              }
            },
            messages: {
              ["entry.635019513"]: {
                required: 'Please enter your name.'
              },
              ["entry.352553147"]: {
                required: 'Please enter an email-id.',
                email: 'please enter a <em>valid</em> email-id.'
              },
              ["entry.676157046"]: {
                required: 'Please enter a phone no.'
              }
            }
          })
    if ($('.chat-row2 input').val().replace(/\s/g, '') == "" && $('.chat-row3 input').val().replace(/\s/g, '') == "" && $('.chat-row4 input').val().replace(/\s/g, '') == "") {
    $('.chat-cover input').val("");
    }

})
