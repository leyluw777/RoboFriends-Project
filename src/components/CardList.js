import Card from './Card'



const CardList = ({robots}) => {
    return(
        <div > 
        {robots.map((item, i) => {
        return <Card key = {i} name={item.name} id={item.id} email={item.email} />
    })}
    </div>
    )
}

export default CardList;
