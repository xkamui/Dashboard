import React from "react";
import axios from "axios";
import Account from "./Account";

export default function AdminAccounts() {
  const emptyAccount = {
    id: null,
    account: "",
    chars: 0,
  };
  const [accountObject, setAccountObject] = React.useState(emptyAccount);

  const urlAccountsAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/accounts";
  const [memosAccountsList, setMemosAccountsList] = React.useState([]);
  const getAccountsList = async () => {
    await axios.get(urlAccountsAllAPI).then((res) => {
      setMemosAccountsList(res.data);
    });
  };

  React.useEffect(() => {
    getAccountsList();
  }, []);

  const urlAccountsaveAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/accountsPut";
  const saveNewAccount = async () => {
    await axios
      .get(urlAccountsaveAPI, {
        params: {
          id: accountObject.id,
          account: accountObject.account,
        },
      })
      .then((res) => {
        setAccountObject(emptyAccount);
        getAccountsList();
      });
  };

  const catchAccountDatas = (account) => {
    setAccountObject({
      account: account.account,
      id: account.id,
    });
  };

  // Update elements while searching
  const handleSearch = (str) => {
    if (str.length === 0) {
      setAccountObject(emptyAccount);
    } else {
      setAccountObject({ ...accountObject, account: str });
    }
  };

  const urlAccountDeleteAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/accountsDel?account_id=";
  const confirmAccountDelete = async (account) => {
    if (window.confirm(`Do you really want to delete this account?`)) {
      await axios.get(urlAccountDeleteAPI + account.id).then((res) => {
        getAccountsList();
        setAccountObject(emptyAccount);
      });
    }
  };

  return (
    <div className="board-content">
      <div className="board-zone memos-admin-form">
        <div className="formRow">
          <label htmlFor="newAccountName">
            Filter or create a new account:{" "}
          </label>
          <input
            type="search"
            name="newAccountName"
            required
            value={accountObject.account}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="formRow">
          <button
            className="saveButton"
            onClick={() => saveNewAccount()}
          >{`Save ${
            accountObject.id === null ? "as new" : ""
          } account`}</button>
        </div>
      </div>
      <div className="board-zone scroll memos-admin-list">
        <div className="wrapper">
          {memosAccountsList
            .filter((account) =>
              account.account
                .toLowerCase()
                .includes(accountObject.account.toLowerCase())
            )
            .map((account) => (
              <Account
                key={account.id}
                account={account}
                onEdit={() => catchAccountDatas(account)}
                onDelete={() => confirmAccountDelete(account)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
