import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:30PM" content="I believe tomorrow everyone going to buy all stocks" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Yesterday at 12:04PM" content="I guess today is bad day to buy stocks" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Mon 5/24 at 2:10AM" content="IM NOT FCKING SELL" avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))