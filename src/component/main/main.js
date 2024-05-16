import Genre from './genre/genre.js'
import TeaBook from './teaBook/teaBook.js'

const Main = ({ themeStyle }) => {
    return (
        <div className='top'>
            <Genre themeStyle={themeStyle}/>
            <TeaBook themeStyle={themeStyle}/>
        </div>
    )
}

export default Main;