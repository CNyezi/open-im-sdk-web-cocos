export enum CbEvents {
  OnConnectFailed = 'OnConnectFailed',
  OnConnectSuccess = 'OnConnectSuccess',
  OnConnecting = 'OnConnecting',
  OnKickedOffline = 'OnKickedOffline',
  OnSelfInfoUpdated = 'OnSelfInfoUpdated',
  OnUserTokenExpired = 'OnUserTokenExpired',
  OnProgress = 'OnProgress',
  OnRecvNewMessage = 'OnRecvNewMessage',
  OnRecvNewMessages = 'OnRecvNewMessages',
  OnRecvMessageRevoked = 'OnRecvMessageRevoked',
  OnNewRecvMessageRevoked = 'OnNewRecvMessageRevoked',
  OnRecvC2CReadReceipt = 'OnRecvC2CReadReceipt',
  OnRecvGroupReadReceipt = 'OnRecvGroupReadReceipt',
  OnConversationChanged = 'OnConversationChanged',
  OnNewConversation = 'OnNewConversation',
  OnSyncServerFailed = 'OnSyncServerFailed',
  OnSyncServerFinish = 'OnSyncServerFinish',
  OnSyncServerStart = 'OnSyncServerStart',
  OnTotalUnreadMessageCountChanged = 'OnTotalUnreadMessageCountChanged',
  OnBlackAdded = 'OnBlackAdded',
  OnBlackDeleted = 'OnBlackDeleted',
  OnFriendApplicationAccepted = 'OnFriendApplicationAccepted',
  OnFriendApplicationAdded = 'OnFriendApplicationAdded',
  OnFriendApplicationDeleted = 'OnFriendApplicationDeleted',
  OnFriendApplicationRejected = 'OnFriendApplicationRejected',
  OnFriendInfoChanged = 'OnFriendInfoChanged',
  OnFriendAdded = 'OnFriendAdded',
  OnFriendDeleted = 'OnFriendDeleted',
  OnJoinedGroupAdded = 'OnJoinedGroupAdded',
  OnJoinedGroupDeleted = 'OnJoinedGroupDeleted',
  OnGroupDismissed = 'OnGroupDismissed',
  OnGroupMemberAdded = 'OnGroupMemberAdded',
  OnGroupMemberDeleted = 'OnGroupMemberDeleted',
  OnGroupApplicationAdded = 'OnGroupApplicationAdded',
  OnGroupApplicationDeleted = 'OnGroupApplicationDeleted',
  OnGroupInfoChanged = 'OnGroupInfoChanged',
  OnGroupMemberInfoChanged = 'OnGroupMemberInfoChanged',
  OnGroupApplicationAccepted = 'OnGroupApplicationAccepted',
  OnGroupApplicationRejected = 'OnGroupApplicationRejected',

  UploadComplete = 'UploadComplete',
  OnRecvCustomBusinessMessage = 'OnRecvCustomBusinessMessage',
  OnUserStatusChanged = 'OnUserStatusChanged',

  // rtc
  OnReceiveNewInvitation = 'OnReceiveNewInvitation',
  OnInviteeAccepted = 'OnInviteeAccepted',
  OnInviteeRejected = 'OnInviteeRejected',
  OnInvitationCancelled = 'OnInvitationCancelled',
  OnHangUp = 'OnHangUp',
  OnInvitationTimeout = 'OnInvitationTimeout',
  OnInviteeAcceptedByOtherDevice = 'OnInviteeAcceptedByOtherDevice',
  OnInviteeRejectedByOtherDevice = 'OnInviteeRejectedByOtherDevice',

  // meeting
  OnStreamChange = 'OnStreamChange',
  OnRoomParticipantConnected = 'OnRoomParticipantConnected',
  OnRoomParticipantDisconnected = 'OnRoomParticipantDisconnected',
  OnReceiveCustomSignal = 'OnReceiveCustomSignal',
}
