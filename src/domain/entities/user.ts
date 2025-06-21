interface IUserProps {
  id?: string | null;
  name: string;
  email: string
  passwordHashed: string;
  createdAt: Date | null;
  isActive: boolean;
}

export class User {
  private props: IUserProps;

  constructor(props: IUserProps) {
    if(props.createdAt === undefined || props.createdAt === null) {
      props.createdAt = new Date();
    }
    
    if (props.isActive === undefined || props.isActive === null) {
      props.isActive = true;
    }
    this.props = props;
  }

  isValidForLogin(): boolean {
    return this.props.isActive;

  }

  static create(
    id: string | null = null,
    name: string,
    email: string,
    passwordHashed: string,
    createdAt: Date = new Date(),
    isActive: boolean = true
  ): User {
    return new User({ id, name, email, passwordHashed, createdAt, isActive });
  }
}
