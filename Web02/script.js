  class Shell {
            static prefix = 'shellCTF{';
            static suffix = '}';
            static o = [5, 1, 3, 4, 7, 2, 6, 0];
            static encrypted = 'bGVnbGxpaGVwaWNrdD8Ka2V0ZXRpZGls';

            static validate(value) {
                if (!value.startsWith(Shell.prefix) || !value.endsWith(Shell.suffix)) {
                    return false;
                }
                value = value.slice(Shell.prefix.length, -Shell.suffix.length);
                if (value.length !== 32) {
                    return false;
                }

                const c = (function (str) {
                    const result = [];
                    for (let i = 0; i < str.length; i += 4) {
                        result.push(str.slice(i, i + 4));
                    }
                    return result;
                })(value);

                const convertedValue = Shell.o.map(index => c[index]).join('');

                return convertedValue === Shell.encrypted;
            }
        }

        function validatePassword(form) {
            const passwordInput = form.querySelector('[name="password"]');
            const passwordValue = passwordInput.value;

            if (Shell.validate(passwordValue)) {
                alert("You got the flag!");
                return true;
            } else {
                alert('Try again.');
                return false;
            }
        }
