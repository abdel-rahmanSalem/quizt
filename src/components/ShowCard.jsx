import PropTypes from "prop-types";

const ShowCard = ({icon , text}) => {
  return (
    <div className="rounded-3xl p-[2px] bg-gradient-to-b from-blue-600/80 via-blue-600/10 hover:via-blue-600/30  transition-all  to-transparent overflow-hidden mb-8 md:mr-8">
        <div className="rounded-3xl p-4 bg-gray-900 duration-500 select-none  text-center">
            <div className="flex flex-col justify-around h-48 text-blue-600">
                {icon}
                <p className="max-w-[14rem] text-white">{text}</p>
            </div>
        </div>
    </div>
  )
}

export default ShowCard

ShowCard.propTypes = {
    icon: PropTypes.any,
    text: PropTypes.any
}