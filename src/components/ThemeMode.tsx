
import { isLight } from "../ThemeState";
import { createCookie } from "../utils/CookiesHelper";

interface Props {
    className?: string;

}

export default function ThemeMode (props: any) {

    
    const toggleTheme = () => {
        console.log('test');

        const html = document.getElementsByTagName('html')[0];
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            createCookie('theme', 'light', 30);
            isLight.set(true);
            //Astro.createCookie('theme', 'light', 30)
            //Headers.createCookie('theme', 'light', 30);
            console.log(document.cookie)
        } else {
            html.classList.add('dark');
            isLight.set(false);
            //Astro.request.headers.append('theme', 'dark')
            //Astro.createCookie('theme', 'dark', 30)
            createCookie('theme', 'dark', 30);
            }
        }

        if (typeof props.className === 'undefined') props.className = '';
    
    return (
        <div className={`${props.className} text-5xl`} title='Theme Mode' onClick={toggleTheme}>
            {props.Light}
            {props.Dark}
        </div>
    )
}




