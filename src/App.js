import Container from './components/container/Container'
import User from './components/social-profile/User'
import user from './components/social-profile/user.json'
import Statistics from './components/statistics/Statistics'
import statisticalData from './components/statistics/statistical-data.json'
import FriendList from './components/friend-list/FriendList'
import Friends from './components/friend-list/friends.json'
import TransactionsTable from './components/transaction-history/TransactionsTable'
import transactionHistory from './components/transaction-history/transactions.json'
import './App.css';

const App = () => {
  return (
    <Container>
      <User
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  
    <Statistics
      title="Upload stats" 
      stats={statisticalData}
      />
      
      <FriendList
        friends={Friends}
      />

      <TransactionsTable
      items={transactionHistory}
      />
    
    </Container>
      
  
)}

export default App;
