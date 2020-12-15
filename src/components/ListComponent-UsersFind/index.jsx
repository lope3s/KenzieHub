const UsersFind = ({ searchResult }) => {
  console.log(searchResult)
  return searchResult.map((user, index) => {
    return (
      <div key={index}>
        <img
          alt={user.name}
          src={
            user.avatar_url
              ? user.avatar_url
              : "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
          }
        />
        <p>{user.name}</p>
        <p>{user.course_module !== "undefined" && user.course_module}</p>
        <p>{user.contact !== "undefined" && user.contact}</p>
      </div>
    )
  })
}

export default UsersFind
