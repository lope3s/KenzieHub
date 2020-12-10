const UsersMap = ({listOfUsers}) => {
    return (
        listOfUsers.map(
            ({ name, course_module, avatar_url, contact }, index) => (
              <div key={index}>
                <img
                  alt={name}
                  src={
                    avatar_url
                      ? avatar_url
                      : "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
                  }
                />
                <p>{name}</p>
                <p>{course_module !== "undefined" && course_module}</p>
                <p>{contact !== "undefined" && contact}</p>
              </div>
            )
          )
    )
}

export default UsersMap