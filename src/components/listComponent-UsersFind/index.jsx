const UsersFind = ({searchResult}) => {
    return (
        <div>
            <img
              alt={searchResult.name}
              src={
                searchResult.avatar_url
                  ? searchResult.avatar_url
                  : "https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
              }
            />
            <p>{searchResult.name}</p>
            <p>
              {searchResult.course_module !== "undefined" &&
                searchResult.course_module}
            </p>
            <p>
              {searchResult.contact !== "undefined" && searchResult.contact}
            </p>
        </div>
    )
}

export default UsersFind