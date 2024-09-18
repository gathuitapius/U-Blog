import "./About.sass"
export const About = () => {
    return <div className="aboutpage">
            <h2>About Us</h2>
            <hr/>
            <div className="info">
                <div className="image">
                    <img src="./images/aboutblog.png" alt="blogimg"/>
                </div>
                <div>
            Welcome to <strong>U-Blog site</strong>!<br/>

            At <strong>U-Blog site</strong>, we're passionate about technology, travel,
             lifestyle. Our mission is to provide you with engaging, insightful, 
            and thought-provoking content that inspires, educates, and entertains.
            <br/>
                </div>
            </div>
            <div>
            <h3>Who We Are</h3>
            <hr/>
            <div className="whoarewe">
            <div className="we">
                <br/>
                We are a team of dedicated writers, creatives, 
                and enthusiasts who share a love for reading. 
                Whether you're here to learn something new, stay updated on the latest trends, 
                or simply enjoy a good read, we've got you covered. Our diverse backgrounds and experiences
                 bring a rich variety of perspectives to every post, ensuring that there's something for
                  everyone.
                <br/>
            </div>
            <div className="we-img">
                <img src="./images/whoarewe.jfif"/>    
            </div> 
            </div>
            </div>
            <h3>What We Do</h3>
            <hr/>
            <br/>
            <h4>Our blog covers a wide range of topics</h4>
            <div className="topics">    
                <div className="topic">
                    <div className="topic-img">
                        <img src="./images/tech.jfif" alt="Tech"/>
                    </div>
                    <h4>
                        Technology
                    </h4>
                    <div className="topic-desc">
                        <p>
                        Technology refers to the application of scientific knowledge for practical purposes, 
                        especially in industries. It encompasses a wide range of tools, machines, systems, 
                        and processes that improve our ability to solve problems, enhance productivity, 
                        and make life more convenient. From smartphones and computers to the internet and 
                        artificial intelligence, technology shapes how we communicate, work, and live, 
                        driving innovation and transforming the world around us.
                        </p>
                    </div>
                </div>
                <div className="topic">
                    <div className="topic-img">
                        <img src="./images/travel.jfif" alt="Tech"/>
                    </div>
                    <h4>Travel</h4>
                    <div className="topic-desc">
                        <p>
                        Travel is the experience of exploring new places, cultures, and perspectives. 
                        It allows us to step outside our daily routines, discover the beauty of different
                         landscapes, and connect with people from around the world. Whether it’s a weekend
                          getaway or an international adventure, travel offers the opportunity to learn, 
                          relax, and grow. It enriches our lives by providing unforgettable memories, 
                          inspiring creativity, and giving us a deeper appreciation of the world we
                           live in.
                        </p>
                    </div>
                </div>
                <div className="topic">
                    <div className="topic-img">
                        <img src="./images/lifestyle.jfif" alt="Tech"/>
                    </div>
                    <h4>Lifestyle</h4>
                    <div className="topic-desc">
                        <p>
                        Lifestyle refers to the way we live our daily lives, shaped by our choices, 
                        habits, and personal values. It encompasses everything from our health and 
                        fitness routines, fashion sense, and home decor to how we spend our leisure time
                         and manage relationships. A well-balanced lifestyle promotes physical, mental, 
                         and emotional well-being, helping us find harmony between work, relaxation,
                          and personal growth. Embracing a lifestyle that reflects who we are allows us
                           to live more intentionally and fully.
                        </p>
                    </div>
                </div>
                <div className="topic">
                    <div className="topic-img">
                        <img src="./images/agri.jfif" alt="Tech"/>
                    </div>
                    <h4>Agriculture</h4>
                    <div className="topic-desc">
                        <p>
                        Agriculture is the practice of cultivating plants and raising animals to produce food,
                         fiber, and other essential products. It is one of the oldest human activities and
                          remains a critical part of modern life, sustaining populations worldwide. 
                          From traditional farming to advanced methods like hydroponics and precision
                           agriculture, this sector is constantly evolving to meet the growing demand 
                           for sustainable and efficient food production. Agriculture not only feeds 
                           communities but also plays a vital role in economies, environmental conservation,
                            and global trade.
                        </p>
                    </div>
                </div>
            </div>
            
                <div className="goals">
                    <div className="mission">
                        <h3>Our mission</h3>
                            <p>
                        We believe in delivering quality content that's not only informative but also easy to
                        understand and enjoyable to read. We research, write, and edit each piece with care
                        to ensure it meets the high standards our readers expect.
                            </p>
                    </div>
                    <div className="vision">
                        <h3>Our Vision</h3>
                        <p>
                        Our vision is to create a community of like-minded individuals who are as passionate about
                        reading & writing as we are. We aim to foster a space where ideas can be shared, 
                        can be expanded, and connections can be made.
                        </p>
                    </div>
                </div>
            <div className="journey">
            <h3>Join Us on This Journey</h3>
            <p>
            We're excited to have you as part of our community! Whether you're a regular reader or a
            first-time visitor, we invite you to explore our blog, leave comments, and share your thoughts.
            Together, we can create a vibrant and engaging space where everyone feels welcome.
            </p>
            <p>
            Thank you for being a part of <strong>U-Blog</strong>. We look forward to sharing this journey
             with you!
            </p>
            </div>
        
        </div>
}