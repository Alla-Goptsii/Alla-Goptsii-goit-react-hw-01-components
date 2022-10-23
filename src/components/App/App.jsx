import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../Transactions/Transactions';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <ul className={css.list}>
        <FriendList friends={friends} />
      </ul>
      <ul>
        <TransactionHistory transactions={transactions} />
      </ul>
    </div>
  );
};
