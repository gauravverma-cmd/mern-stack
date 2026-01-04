import Card from "./components/Card";
const App = () => {
const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://i.pinimg.com/1200x/75/ad/25/75ad255ebbf47f949a79efa26e28cbbe.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    id: 2,
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$95/hr",
    location: "San Francisco, USA"
  },
  {
    id: 3,
    brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "SDE I",
    tag1: "Full-time",
    tag2: "Junior-level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Mid-level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    id: 5,
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$110/hr",
    location: "Los Angeles, USA"
  },
  {
    id: 6,
    brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    id: 7,
    brandLogo: "https://i.pinimg.com/1200x/df/00/b1/df00b1d8590dba5b570420e96809b5c6.jpg",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$100/hr",
    location: "Austin, USA"
  },
  {
    id: 8,
    brandLogo: "https://i.pinimg.com/1200x/4b/69/ca/4b69ca5f88e262bd46e7d927d8204a42.jpg",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    id: 9,
    brandLogo: "https://i.pinimg.com/1200x/13/59/fd/1359fdd23060111974f7b05813b29264.jpg",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Java Developer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$90/hr",
    location: "Noida, India"
  },
  {
    id: 10,
    brandLogo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$85/hr",
    location: "San Jose, USA"
  }
];

 console.log(jobOpenings);
 
  return <div className="parent">
    {jobOpenings.map(function(elem){
      return <Card company={elem.companyName} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} logo={elem.brandLogo}/>
    })}

  </div>;
};

export default App;
