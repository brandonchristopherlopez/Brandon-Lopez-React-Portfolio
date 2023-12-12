import coverImage from '../../assets/small/portraits/BrandonsHeadshot.jpeg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img className="profilePic" src={coverImage} alt="Headshot of a guy named Brandon"></img>
        </div>
        <p>
        Client Service Professional with 4 years of experience in sales, operations, and project management. A detail-oriented individual that will manage multiple projects in a fast-paced environment. Passionate about communicating collaboratively and effectively with a team.

An open-minded individual who is welcoming and accepting to all. Diversity and ethical decisions are key. I offer a helping hand anywhere I go and would not ever ask anyone to do anything, I wouldn't.        </p>
        <p>
Seeing beauty where most people see emptiness        </p>
<p>-Brandon Lopez</p>
      </div>
    </section>
  );
}

export default About;
