/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';
import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


window.bootstrap = bootstrap;
// les flash messages
let toastLiveExample = document.getElementsByClassName('toast')
if (toastLiveExample.length > 0) {
    toastLiveExample.classList.add('show');
}