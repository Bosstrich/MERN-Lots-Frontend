
const Button = ({variant = 'primary', text, className= '', link, onClick}) => {

    
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

        primary: `bg-primary btn text-white font-semibold hover:opacity-90`,
        secondary: 'text-primary bg-dark-1 btn font-Montserrat border border-primary hover:bg-primary hover:text-dark-1 transition delay 300',
        white: 'text-black bg-white w-[200px] rounded-md font-medium py-3 hover:opacity-90'
    }

    return (
        
        <button className={`${btnVariant[variant]} ${className}`} 
                onClick={handleClick}>
            {text}
        </button>

     );
}
 
export default Button;