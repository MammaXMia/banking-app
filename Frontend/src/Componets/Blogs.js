import React from 'react';
import Card from 'react-bootstrap/Card';








function Blogs() {
  return (

    <>

        <div className="container all blog-page header">
          <div className="row pt-4 header-wrap piggy-bank">

            <div className="col-12 mb-4 mt-4">
              <Card.Body className="header-card">
                <Card.Title className="card-title">
                Blog post for women by women
                </Card.Title>
                <Card.Text className="card-text">
                  Some quick links to the best blogs on women and money!
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </div>

      <div className="container all around coushin">
        <div className="row pt-4 piggy bank pick shelf">

        <div className="col-6 mb-4 mt-4">
        <Card.Img variant="top" src="./images/blog-piggybank.jpg" alt="piggy-bank"/>

      </div>

      <div className="col-6 mb-4 mt-4">
        <Card.Body>
          <Card.Title>
          Blog post for women by women
          </Card.Title>
          <Card.Text>
            Some quick links to the best blogs on women and money!
          </Card.Text>
        </Card.Body>
      </div>
    </div>
  </div>




      <div className="container cake-shelf">
        <div className="row pt-6 top-shelf">
          <div className="col-sm-12 col-md-6 mb-4 pt-4 blog">

            <Card>
              <Card.Body>
                <Card.Title>Finance Tips for New Parents</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">My Fab Finance!</Card.Subtitle>
                <Card.Img className="blog-img"  variant="top" src="./images/blog-baby-blog.jpg"/>
                <Card.Text className = "mt-2 tips-new-parents-text">
                  Congratulations! You are walking into one of the most joyous and emotion-filled chapters of your life. And it may also be one of the most expensive. There’s so much to think about when you are a new parent. Especially finances. All new parents can benefit from finance tips
                </Card.Text>
                <Card.Link href="https://myfabfinance.com/finance-tips-for-new-parents/">Read More!</Card.Link>
                
              </Card.Body>
            </Card>

          </div>

          <div className="col-6 mb-4 pt-4 ">

            <Card>
              <Card.Body>
                <Card.Title>Everyone says I need a Roth IRA. Do I really?</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Women Who Money</Card.Subtitle>
                <Card.Img className="blog-img"  variant="top" src="./images/blog-budget-blog.jpg"/>
                <Card.Text className = "mt-2 roth-text" >
                If there is one thing that personal finance gurus all seem to agree on, it is this: You should have a Roth IRA account.
                Alongside budgeting and having an emergency cash reserve, it has assumed its place as bread-and-butter advice ...   
                </Card.Text>
                <Card.Link href="https://womenwhomoney.com/roth-ira-pros-cons/">Read More!</Card.Link>
                
              </Card.Body>
            </Card>
          </div>

          <div className="col-6 mb-4 pt-4 blog">

            <Card>
              <Card.Body>
                <Card.Title>Financial Snapshot Spreadsheet</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Budgets Are Sexy</Card.Subtitle>
                <Card.Img className="blog-img" variant="top" src="./images/blog-investing-blog.jpg" />
                <Card.Text className = "mt-2 spreadsheets-text">
                “I’m bringing budgets back (yup!) Them other non-budgeters don't know how to act (yup!)”
                  Mr. Timberlake got nothing on me What, you don’t think that's the same as bringing sexy back? Well check the calculation my friends.
                </Card.Text>
                <Card.Link href="https://budgetsaresexy.com/budget-are-sexy-financial-snapshot-spreadsheet/"> Read More!</Card.Link>
                
              </Card.Body>
            </Card>
          </div>

          <div className="col-6 mb-4 pt-4 blog">

            <Card>
              <Card.Body>
                <Card.Title>What Are 10 Ways To Save Money?</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The Budgetnista</Card.Subtitle>
                <Card.Img className="blog-img" variant="top" src="./images/blog-saving-blog.jpg"/>
                <Card.Text className = "mt-2 10-savingmoney-text">
                Imagine a life where you effortlessly navigate financial challenges, where saving becomes second nature, and your money works for you. Today we answer the question, “what are 10 ways to save ..
                </Card.Text>
                <Card.Link href="What Are 10 Ways To Save Money? (Short & Long-Term Goals)"> Read More!</Card.Link>
                
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row middle-shelf border border-success">
          <div className="col-sm-12 col-md-2 mb-4 border bg-warning">Resize the screen. I grow depending on screen sizes</div>
          <div className="col-6 col-lg-4 mb-4 border bg-danger">I always stay the same time, even if I have to move over or below</div>
          <div className="col-4 mb-4 border bg-info">I always stay the same time, even if I have to move over or below</div>

        </div>



      </div>






    </>
  );
}

export default Blogs