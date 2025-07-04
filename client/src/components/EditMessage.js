import React, { useState } from "react";

/**
 * EditMessage component renders a form to edit an existing message.
 * Sends a PATCH request to update the message on the backend and updates parent state on success.
 */
function EditMessage({ id, body, onUpdateMessage }) {
  const [messageBody, setMessageBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://127.0.0.1:5555/messages/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: messageBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedMessage) => onUpdateMessage(updatedMessage));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditMessage;
