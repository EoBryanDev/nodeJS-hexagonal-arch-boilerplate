interface IUserProps {
  id: string ;
  name: string;
  email: string;
  birthDate: string;
  password: string;
  createdAt?: Date | null;
  isActive?: boolean | null;
}

class User {
  readonly props: IUserProps;

  constructor(props: IUserProps) {
    // If user didnt provide a createdAt date, set it to now
    if(props.createdAt === undefined || props.createdAt === null) {
      props.createdAt = new Date();
    }

    // If user didnt provide an isActive status, set it to true
    if (props.isActive === undefined || props.isActive === null) {
      props.isActive = true;
    }
    this.props = props;
  }


}

export { User };
