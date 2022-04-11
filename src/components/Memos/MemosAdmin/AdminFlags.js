import React from "react";
import axios from "axios";
import Flag from "./Flag";

export default function AdminFlags() {
  const emptyFlag = {
    id: null,
    term: "",
    good_bad: false,
  };

  const urlFlagsAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/flags";
  const [memosFlagsList, setMemosFlagsList] = React.useState([]);
  const getFlagsList = async () => {
    await axios.get(urlFlagsAllAPI).then((res) => {
      setMemosFlagsList(res.data);
    });
  };

  const [flagObject, setFlagObject] = React.useState(emptyFlag);

  React.useEffect(() => {
    getFlagsList();
  }, []);

  const urlFlagSaveAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/flagsPut";
  const saveNewFlag = async () => {
    await axios
      .get(urlFlagSaveAPI, {
        params: {
          id: flagObject.id,
          good_bad: flagObject.good_bad,
          term: flagObject.term,
        },
      })
      .then((res) => {
        setFlagObject(emptyFlag);
        getFlagsList();
      });
  };

  const catchFlagDatas = (flag) => {
    setFlagObject({
      good_bad: flag.good_bad === "good" ? true : false,
      term: flag.term,
      id: flag.id,
    });
  };

  // Update elements while searching
  const handleSearch = (str) => {
    if (str.length === 0) {
      setFlagObject(emptyFlag);
    } else {
      setFlagObject({ ...flagObject, term: str });
    }
  };

  const urlFlagDeleteAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/flagsDel?flag_id=";
  const confirmFlagDelete = async (flag) => {
    if (window.confirm(`Do you really want to delete this flag?`)) {
      await axios.get(urlFlagDeleteAPI + flag.id).then((res) => {
        getFlagsList();
        setFlagObject(emptyFlag);
      });
    }
  };

  return (
    <div className="board-content">
      <div className="board-zone memos-admin-form">
        <div className="formRow">
          <label htmlFor="newFlagTerm">Filter or create a new flag: </label>
          <input
            type="search"
            name="newFlagTerm"
            required
            value={flagObject.term}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className={`badGood bad ${!flagObject.good_bad ? "active" : ""}`}
            onClick={() =>
              setFlagObject({ ...flagObject, good_bad: !flagObject.good_bad })
            }
          >
            bad
          </button>
          <button
            className={`badGood good ${flagObject.good_bad ? "active" : ""}`}
            onClick={() =>
              setFlagObject({ ...flagObject, good_bad: !flagObject.good_bad })
            }
          >
            good
          </button>
        </div>
        <div className="formRow">
          <button className="saveButton" onClick={() => saveNewFlag()}>{`Save ${
            flagObject.id === null ? "as a new" : ""
          } flag`}</button>
        </div>
      </div>
      <div className="board-zone scroll memos-admin-list">
        <div className="wrapper">
          {memosFlagsList
            .filter((flag) =>
              flag.term.toLowerCase().includes(flagObject.term.toLowerCase())
            )
            .map((flag) => (
              <Flag
                key={flag.id}
                flag={flag}
                onEdit={() => catchFlagDatas(flag)}
                onDelete={() => confirmFlagDelete(flag)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
