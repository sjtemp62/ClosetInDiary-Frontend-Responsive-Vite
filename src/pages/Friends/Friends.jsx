import React, { useState, useEffect } from "react";
import { EditDeleteButton } from "../../components/EditDeleteButton";
import Frame from "../../components/FriendsFrame";
import styles from "./Friends.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/NormalHeader";
import apiClient from "../../services/apiClient";
const FriendsRequests = () => {
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRequestPage, setCurrentRequestPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchType, setSearchType] = useState("ID");
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const friendsPerPage = 16;
  const requestsPerPage = 16;

  useEffect(() => {
    // 서버에서 친구 목록을 가져오는 함수
    const fetchFriends = async () => {
      try {
        const response = await apiClient.get('/friends');
        const data = response.data;
        setFriends(data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    // 서버에서 친구 요청 목록을 가져오는 함수
    const fetchRequests = async () => {
      try {
        const response = await apiClient.get('/friend-requests/received'); // API 엔드포인트를 적절히 수정하세요
        const data = await response.data;
        setRequests(data || []);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchFriends();
    fetchRequests();
  }, []);


  // 현재 페이지에 해당하는 친구 목록을 계산
  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

  // 현재 페이지에 해당하는 친구 요청 목록을 계산
  const indexOfLastRequest = currentRequestPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

  // 페이지 변경 함수
  const paginateFriends = (pageNumber) => setCurrentPage(pageNumber);
  const paginateRequests = (pageNumber) => setCurrentRequestPage(pageNumber);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSearchType("ID");
    setSearchValue("");
  };

  const addFriend = async () => {
    if (!searchValue.trim()) {
      alert("값을 입력하세요.");
      return;
    }

    let url = "/friend-requests/send";
    const formData = new FormData();

    switch (searchType.toLowerCase()) {
      case "email":
        url = "/friend-requests/send/by-email";
        formData.append("email", searchValue.trim());
        break;
      case "username":
        url = "/friend-requests/send/by-username";
        formData.append("username", searchValue.trim());
        break;
      case "id":
        url = "/friend-requests/send/by-id";
        formData.append("id", searchValue.trim());
        break;
      default:
        alert("유효한 검색 유형을 선택하세요.");
        return;
    }

    try {
      const response = await apiClient.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(`친구 요청이 성공적으로 전송되었습니다.`);
      closeModal();
    } catch (error) {
      console.error("Error sending friend request:", error);
      alert("친구 요청을 보내는 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Header />
      <div className={styles.friendsRequestsContainer}>
        <div className={styles.friendsRequests}>
          <div className={styles.frame2}>
            <div className={styles.frame3}>
              <div className={styles.frameWrapper}>
                <div className={styles.frame4}>
                  <div className={styles.frame5}>
                    <div className={styles.frame6}>
                      <div className={styles.frame7}>
                        <div className={styles.textWrapper5}>MY FRIENDS</div>

                        <EditDeleteButton
                          button="edit"
                          className={styles.designComponentInstanceNode}
                          divClassName={styles.editDeleteButton2}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button onClick={openModal} className={styles.friendsModalOpen}>친구추가</button>

                    {isModalOpen && (
                      <div className={styles.modal}>
                        <div className={styles.modalContent}>
                          <div className={styles.searchOptionContainer}>
                            <h2 className={styles.friendAddTitle}>친구 추가</h2>
                            <div className={styles.searchContainer}>
                              <label htmlFor="searchType">검색 기준 : </label>
                              <select
                                id="searchType"
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                              >
                                <option value="ID">ID</option>
                                <option value="username">Username</option>
                                <option value="email">Email</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              placeholder={`Enter ${searchType}`}
                              value={searchValue}
                              onChange={(e) => setSearchValue(e.target.value)}
                            />
                          </div>
                          <div className={styles.modalButtons}>
                            <button onClick={addFriend}>친구 요청 보내기</button>
                            <button onClick={closeModal}>취소</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.frame8}>
                <div className={styles.frame9}>
                  <div className={styles.frame10}>
                    <div className={styles.textWrapper6}>가나다순</div>
                  </div>

                  <div className={styles.frame11}>
                    <div className={styles.textWrapper7}>추가순</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.frame12}>
                {currentFriends.length > 0 ? (
                  currentFriends.map((friend) => (
                    <Frame key={friend.id} className={styles.frame96} mode="message" friend={friend} />
                  ))
                ) : (
                  <div className={styles.noFriendsMessage}>
                    세상은 만남으로 빛납니다. 첫 친구를 추가해 보세요.
                  </div>
                )}
              </div>
              <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(friends.length / friendsPerPage) }, (_, index) => (
                  <button key={index} onClick={() => paginateFriends(index + 1)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.frame13}>
            <div className={styles.frame14}>
              <div className={styles.frame15}>
                <div className={styles.textWrapper8}>FRIEND REQUESTS</div>
              </div>
            </div>

            <div className={styles.frame16}>
              {requests.length > 0 ? (
                currentRequests.map((request) => (
                  <Frame
                    key={request.id}
                    className={styles.frame96}
                    mode="request"
                    friend={request}
                  />
                ))
              ) : (
                <div className={styles.noRequestsMessage}>
                  지금은 고요한 상태, 다음 인연은 언제 올까요?
                </div>
              )}
            </div>
            {friends.length > 0 && (
              <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(friends.length / friendsPerPage) }, (_, index) => (
                  <button key={index} onClick={() => paginateRequests(index + 1)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FriendsRequests;