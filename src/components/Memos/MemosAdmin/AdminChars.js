import React from "react";
import axios from "axios";
import Char from "./Char";

export default function AdminChars() {
  const emptyChar = {
    id: null,
    charname: "",
    account_id: 0,
    account_name: "",
    active: 0,
  };

  const urlCharsAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/chars";
  const [memosCharsList, setMemosCharsList] = React.useState([]);
  const getCharsList = async () => {
    await axios.get(urlCharsAllAPI).then((res) => {
      setMemosCharsList(res.data);
    });
  };

  const urlAccountsAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/accounts";
  const [memosAccountsList, setMemosAccountsList] = React.useState([]);
  const getAccountsList = async () => {
    await axios.get(urlAccountsAllAPI).then((res) => {
      setMemosAccountsList(res.data);
    });
  };

  const [charObject, setCharObject] = React.useState(emptyChar);
  const [charActiveFilter, setCharActiveFilter] = React.useState(null);

  React.useEffect(() => {
    getCharsList();
    getAccountsList();
  }, []);

  const urlCharSaveAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/charsPut";
  const saveNewChar = async () => {
    await axios
      .get(urlCharSaveAPI, {
        params: {
          id: charObject.id,
          active: charObject.active,
          account_id: charObject.account_id,
          charname: charObject.charname,
        },
      })
      .then((res) => {
        setCharObject(emptyChar);
        setCharActiveFilter(null);
        getCharsList();
      });
  };

  const catchCharDatas = (char) => {
    setCharObject({
      active: char.active,
      account_id: char.account_id,
      charname: char.charname,
      id: char.id,
    });
    setCharActiveFilter(char.active);
  };

  const handleActivation = (activeState) => {
    if (charObject.id === null) {
      if (charActiveFilter === activeState) {
        setCharActiveFilter(null);
      } else {
        setCharActiveFilter(activeState);
      }
    } else {
      setCharObject({ ...charObject, active: activeState });
      setCharActiveFilter(activeState);
    }
  };

  // Update elements while searching
  const handleSearch = (str, src) => {
    switch (src) {
      case "account":
        setCharObject({
          ...charObject,
          account_id: str !== "" ? parseInt(str) : 0,
        });
        break;
      case "charname":
        setCharObject(
          str.length === 0 ? emptyChar : { ...charObject, charname: str }
        );
        break;
      default:
        break;
    }
  };

  const urlCharDeleteAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/charsDel?char_id=";
  const confirmCharDelete = async (char) => {
    if (window.confirm(`Do you really want to delete this character?`)) {
      await axios.get(urlCharDeleteAPI + char.id).then((res) => {
        getCharsList();
        setCharObject(emptyChar);
      });
    }
  };

  return (
    <div className="wrapperAdmin">
      <div className="newCharForm">
        <div className="formRow">
          <label htmlFor="newCharName">Filter or create a new character:</label>
          <input
            type="search"
            name="newCharName"
            required
            value={charObject.charname}
            onChange={(e) => handleSearch(e.target.value, "charname")}
          />
          <button
            className={`activeInactive false ${
              charActiveFilter === 0 ? "active" : ""
            }`}
            onClick={() => handleActivation(0)}
          >
            inactive
          </button>
          <button
            className={`activeInactive true ${
              charActiveFilter === 1 ? "active" : ""
            }`}
            onClick={() => handleActivation(1)}
          >
            active
          </button>
        </div>
        <div className="formRow">
          <select
            name="newCharAccount"
            value={charObject.account_id}
            onChange={(e) => handleSearch(e.target.value, "account")}
          >
            <option></option>
            {memosAccountsList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.account}
              </option>
            ))}
          </select>
        </div>
        <div className="formRow">
          <button
            className="saveCharButton"
            onClick={() => saveNewChar()}
          >{`Save ${charObject.id === null ? "as new" : ""} character`}</button>
        </div>
      </div>
      <div className="listingDatas">
        <div className="wrapperListing">
          {(charActiveFilter !== null
            ? memosCharsList.filter((char) => char.active === charActiveFilter)
            : memosCharsList
          )
            .filter((char) =>
              charObject.account_id === 0
                ? 1 === 1
                : char.account_id === charObject.account_id
            )
            .filter((char) =>
              char.charname
                .toLowerCase()
                .includes(charObject.charname.toLowerCase())
            )
            .map((char) => (
              <Char
                key={char.id}
                char={char}
                onEdit={() => catchCharDatas(char)}
                onDelete={() => confirmCharDelete(char)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
