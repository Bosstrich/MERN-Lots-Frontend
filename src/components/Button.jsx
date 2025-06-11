
const Button = ({variant = 'primary', text, className= '', link, onClick, type}) => {
   
    const openLink = () => {
        
        if (link) {

            console.log('link passed:', link);
            window.open(link, '_blank');

        }else{

            window.open(link, '_self');
        }
        
    }

    const handleClick = () => {
        if (onClick) {
            onClick(); // If onClick is passed, run it (for modal trigger or other actions)
        } else {
            openLink(); // Otherwise, open the link if provided
        }
    };

    const btnVariant = {

        primary: `bg-primary btn text-white font-Montserrat hover:opacity-90`,
        secondary: 'btn text-white bg-dark-1 font-Montserrat border border-white hover:bg-gray-200 hover:text-black transition delay 300',
        white: 'btn text-black bg-gray-100 font-Montserrat hover:opacity-90',
        disabled: `btn text-white bg-slate-gray font-semibold`

    }

    return (
        
        <button 
          className={`${btnVariant[variant]} ${className}`} 
          type={type}
          onClick={handleClick}>
            {text}
        </button>

     );
}
 
export default Button;