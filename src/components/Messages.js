const Messages = ({ messages }) => {
  return messages.map((message, index) => {
    return (
      <li key={index}>
        {message.user}: {message.content} ( {message.castedDate} )
      </li>
    );
  });
};

export default Messages;
