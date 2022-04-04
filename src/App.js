import './index.css';
import User from './components/UserProfile/User';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data.json';
import FriendsList from './components/Friends/FriendsList';
import friends from './friends.json';
import TransactionsList from './components/Transactions/TransactionsList';
import transactions from './transactions.json';


export default function App() {
    return (
        <div>
            <User
                tag={user.tag}
                username={user.username}
                location={user.location}
                avatar={user.avatar}
                userFollowers={user.stats.followers}
                userViews={user.stats.views}
                userLikes={user.stats.likes}
            />
            <FriendsList friends={friends} />
            <Statistics
                title="Upload stats"
                stats={data}
            />
         <TransactionsList transactions={transactions} />
        </div>
    );
}