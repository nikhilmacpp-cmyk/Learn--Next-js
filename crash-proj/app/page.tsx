import ExploreBtn from '@/components/ExploreBtn'
import EventCard from '@/components/eventCard'
const events = [
  {image:"/images/event1.png",title:"Event1",slug:"event-1",location:"location-1",date:"date-1",time:'time-1'},
  {image:"/images/event2.png",title:"Event2",slug:"event-2",location:"location-2",date:"date-2",time:'time-2'}]

const BASE_URL = process.env.BASE_URL
const Page = async () =>{
  const reposnse = await fetch(`${BASE_URL}/api/events`);
  const {events} = await reposnse.json();
  return(
    <section>
      <h1 className="text-center">The hub for every dev <br/> Even you can't miss</h1>
      <p className="text-center mt-5">Hackathons,Meetups and confrences, All in one place</p>
      <ExploreBtn/>
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className ="events">
          {events && events?.length > 0 && events.map((item)=>(
            <li key={item.title}>
                <EventCard {...item}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default Page