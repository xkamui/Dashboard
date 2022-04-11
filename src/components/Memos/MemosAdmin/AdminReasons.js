import React from "react";
import axios from "axios";
import Reason from "./Reason";

export default function AdminReasons() {
  const emptyReason = {
    id: null,
    term: "",
  };
  const [reasonObject, setReasonObject] = React.useState(emptyReason);

  const urlReasonsAllAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/reasons";
  const [memosReasonsList, setMemosReasonsList] = React.useState([]);
  const getReasonsList = async () => {
    await axios.get(urlReasonsAllAPI).then((res) => {
      setMemosReasonsList(res.data);
    });
  };

  React.useEffect(() => {
    getReasonsList();
  }, []);

  const urlReasonsaveAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/reasonsPut";
  const saveNewReason = async () => {
    await axios
      .get(urlReasonsaveAPI, {
        params: {
          id: reasonObject.id,
          term: reasonObject.term,
        },
      })
      .then((res) => {
        setReasonObject(emptyReason);
        getReasonsList();
      });
  };

  const catchReasonDatas = (reason) => {
    setReasonObject({
      term: reason.term,
      id: reason.id,
    });
  };

  // Update elements while searching
  const handleSearch = (str) => {
    if (str.length === 0) {
      setReasonObject(emptyReason);
    } else {
      setReasonObject({ ...reasonObject, term: str });
    }
  };

  const urlReasonDeleteAPI =
    "https://www.sir-keichi.com/SK1-api/index.php/memos/reasonsDel?reason_id=";
  const confirmReasonDelete = async (reason) => {
    if (window.confirm(`Do you really want to delete this reason?`)) {
      await axios.get(urlReasonDeleteAPI + reason.id).then((res) => {
        getReasonsList();
        setReasonObject(emptyReason);
      });
    }
  };

  return (
    <div className="board-content">
      <div className="board-zone memos-admin-form">
        <div className="formRow">
          <label htmlFor="newReasonTerm">Filter or create a new reason: </label>
          <input
            type="search"
            name="newReasonTerm"
            required
            value={reasonObject.term}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="formRow">
          <button
            className="saveButton"
            onClick={() => saveNewReason()}
          >{`Save ${reasonObject.id === null ? "as new" : ""} reason`}</button>
        </div>
      </div>
      <div className="board-zone scroll memos-admin-list">
        <div className="wrapper">
          {memosReasonsList
            .filter((reason) =>
              reason.term
                .toLowerCase()
                .includes(reasonObject.term.toLowerCase())
            )
            .map((reason) => (
              <Reason
                key={reason.id}
                reason={reason}
                onEdit={() => catchReasonDatas(reason)}
                onDelete={() => confirmReasonDelete(reason)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
