import styles from "./Profile.module.css";

export const Profile = (props) => {
    let user = props.function();
    console.log(user);
  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src={user.avatar}
          alt="Аватар"
          width="100%"
        />
      </div>
      <div className="col-md-8">
        <h2 className={styles.id}>
          Id: <span>{user.id}</span>
        </h2>
        <h3 className={styles.name}>
          Фамилия, Имя: <span>{user.lastname} {user.name}</span>
        </h3>
        <h3 className={styles.email}>
          Email: <span>{user.email}</span>
        </h3>
        <p className={styles.about}>
          {user.about}
        </p>
        <button
          style={{
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "4px", borderColor: "green"
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};
