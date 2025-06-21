interface ISessionProps {
  id: string | null;
  userId: string;
  token: string;
  refreshToken: string;
  expiresAt: Date;
  createdAt?: Date ;
}

export class Session {
  private props: ISessionProps;

  constructor(props: ISessionProps) {
    if(props.createdAt == null || props.createdAt === undefined) {
      props.createdAt = new Date();
    }

    this.props = props;
  }

  isExpired(): boolean {
    return this.props.createdAt! > this.props.expiresAt;
  }

  static create(userId: string, token: string, refreshToken: string, expiresAt: Date): Session {

      return new Session({id: null, userId, token, refreshToken, expiresAt});
  }


}
