import React, { FC } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const Star: FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg width="233" height="194" viewBox="0 0 233 194" fill="none" {...props}>
      <Path
        d="M216.714 61.3474L216.714 61.3472C216.035 60.6703 213.531 58.3974 210.869 56.0695C208.43 53.9359 205.887 51.7809 204.511 50.7734C202.606 55.1082 200.082 59.0917 197.572 63.0524C197.169 63.6883 196.767 64.3236 196.367 64.9597C199.57 67.7029 207.6 74.7342 211.143 79.2952C212.327 80.8171 213.601 82.6434 214.378 84.6036C215.158 86.5675 215.45 88.6958 214.625 90.7939L214.625 90.794C213.533 93.5716 211.257 94.9754 208.713 95.7772C206.847 96.3655 204.786 96.6425 202.903 96.8956C202.241 96.9846 201.601 97.0706 201 97.1661M216.714 61.3474L200.944 96.8155M216.714 61.3474C219.497 64.1182 222.711 67.6301 225.432 71.4165C228.157 75.2076 230.369 79.2486 231.178 83.0796C233.538 94.2557 228.891 104.445 218.171 108.857C211.081 111.775 202.991 112.55 195.153 113.3C193.106 113.496 191.076 113.691 189.086 113.921C188.84 113.95 188.253 113.99 187.437 114.046C187.041 114.073 186.591 114.104 186.099 114.139C184.605 114.246 182.747 114.39 180.922 114.583C179.1 114.776 177.3 115.019 175.927 115.325C175.243 115.477 174.647 115.649 174.204 115.845C173.983 115.943 173.784 116.053 173.629 116.181C173.476 116.307 173.335 116.474 173.287 116.69L173.633 116.767M216.714 61.3474L216.965 61.0958C222.547 66.6537 229.878 75.2037 231.525 83.0062C233.916 94.3316 229.201 104.702 218.306 109.185C211.162 112.125 203.003 112.906 195.158 113.657C193.119 113.852 191.101 114.045 189.127 114.274C188.872 114.303 188.27 114.345 187.444 114.401C183.392 114.68 173.952 115.328 173.633 116.767M201 97.1661L200.944 96.8155M201 97.1661C201 97.1661 201 97.1661 201 97.1661L200.944 96.8155M201 97.1661C200.173 97.2975 199.347 97.4274 198.521 97.5573C193.239 98.3879 187.968 99.2169 182.765 100.404L182.765 100.404C178.672 101.338 174.624 102.536 170.757 104.148L170.757 104.148C168.878 104.93 167.04 105.809 165.273 106.812L165.273 106.812C164.795 107.083 164.27 107.487 163.705 107.921C163.532 108.054 163.355 108.19 163.174 108.326C162.431 108.886 161.623 109.448 160.856 109.669M200.944 96.8155C200.119 96.9467 199.293 97.0766 198.467 97.2064C193.186 98.0368 187.902 98.8679 182.686 100.058C178.579 100.995 174.511 102.199 170.621 103.82C168.73 104.607 166.879 105.492 165.098 106.503C164.596 106.788 164.043 107.213 163.473 107.651C162.564 108.35 161.613 109.082 160.757 109.328M160.856 109.669L160.757 109.328M160.856 109.669C160.856 109.669 160.856 109.669 160.855 109.669L160.757 109.328M160.856 109.669C160.099 109.888 159.296 110.073 158.498 110.257C158.259 110.312 158.021 110.367 157.784 110.423C156.75 110.667 155.743 110.927 154.832 111.278C153.015 111.978 151.641 113.016 151.207 114.953L151.207 114.953C151.07 115.56 151.232 116.069 151.559 116.44C151.892 116.818 152.411 117.069 153.005 117.107M160.757 109.328L153.005 117.107M173.633 116.767C173.298 118.279 173.539 120.041 174.544 121.139M173.633 116.767L173.287 116.69M174.544 121.139L173.287 116.69M174.544 121.139C175.085 121.729 175.699 122.211 176.315 122.693C177.047 123.267 177.78 123.842 178.392 124.601M174.544 121.139L173.287 116.69M173.287 116.69C172.935 118.273 173.174 120.168 174.282 121.379L174.283 121.379C174.844 121.992 175.481 122.491 176.093 122.971C176.152 123.017 176.211 123.063 176.27 123.11C176.943 123.639 177.58 124.16 178.115 124.824L178.392 124.601M169.858 129.14C169.842 129.066 169.825 128.991 169.807 128.916C169.593 128.587 169.391 128.254 169.2 127.92L169.508 127.744L169.851 127.652C169.95 128.022 170.049 128.396 170.138 128.774C170.259 128.959 170.384 129.142 170.513 129.324C172.073 131.526 175.633 129.287 174.064 127.072C173.762 126.646 173.495 126.214 173.249 125.778C173.037 125.602 172.821 125.43 172.603 125.258L172.823 124.979L173.139 124.819C173.264 125.063 173.392 125.306 173.526 125.547C173.988 125.934 174.438 126.354 174.841 126.853C176.522 128.936 180.091 126.708 178.392 124.601M169.858 129.14L169.512 129.217M169.858 129.14L169.512 129.217C169.512 129.217 169.512 129.217 169.512 129.217M169.858 129.14C170.211 130.736 168.536 132.734 166.859 131.624C165.672 130.838 164.621 129.637 163.75 128.192C163.697 127.866 163.624 127.502 163.544 127.121L163.197 127.194L162.881 127.356C163.049 127.685 163.225 128.005 163.411 128.316C163.418 128.365 163.426 128.413 163.432 128.46C163.703 130.348 161.143 131.203 159.9 130.075C156.565 127.049 155.607 122.066 156.662 117.654C156.709 117.649 156.755 117.643 156.801 117.637L156.756 117.285L156.413 117.193C156.4 117.239 156.388 117.285 156.377 117.331C155.255 117.463 154.126 117.533 152.983 117.461M169.512 129.217C169.41 128.758 169.289 128.299 169.165 127.835L169.816 127.567C170.117 128.093 170.443 128.612 170.803 129.119L170.803 129.119C171.447 130.029 172.502 130.041 173.272 129.554C173.656 129.312 173.939 128.96 174.049 128.572C174.155 128.194 174.108 127.749 173.774 127.277L173.774 127.277C173.277 126.574 172.871 125.859 172.506 125.14L173.043 124.701C173.742 125.252 174.482 125.844 175.117 126.63L175.117 126.63C175.817 127.498 176.917 127.487 177.695 126.998C178.081 126.755 178.352 126.413 178.446 126.046C178.538 125.693 178.477 125.272 178.115 124.824L178.392 124.601M169.512 129.217C169.657 129.877 169.382 130.653 168.874 131.14C168.625 131.379 168.334 131.534 168.033 131.577C167.738 131.62 167.406 131.561 167.055 131.328M167.055 131.328C165.671 130.412 164.46 128.888 163.513 127.033L162.849 127.268C162.947 127.734 163.031 128.157 163.081 128.51L163.081 128.51C163.187 129.252 162.753 129.805 162.1 130.07C161.434 130.34 160.637 130.264 160.139 129.813C156.834 126.814 155.923 121.784 157.099 117.376L157.235 116.865L156.71 116.933C155.475 117.092 154.246 117.184 153.005 117.107M167.055 131.328L166.859 131.624L167.054 131.328C167.055 131.328 167.055 131.328 167.055 131.328ZM152.983 117.461L153.005 117.107C153.005 117.107 153.005 117.107 153.005 117.107M152.983 117.461L153.005 117.107M152.983 117.461L153.005 117.107"
        fill="#F5BE66"
        stroke="#3A2E32"
        stroke-width="0.71"
      />
      <Path
        d="M61.4608 104.028L61.4609 104.028C63.3436 104.799 65.1872 105.668 66.9593 106.66C67.4391 106.929 67.9658 107.329 68.5327 107.76C68.7071 107.893 68.8852 108.028 69.067 108.163C69.8132 108.719 70.6247 109.277 71.3941 109.493C72.1515 109.707 72.9547 109.888 73.7528 110.067C73.9927 110.121 74.2322 110.175 74.4698 110.23C75.5058 110.468 76.5143 110.722 77.4272 111.068C79.2476 111.758 80.6275 112.789 81.0729 114.722C81.2124 115.329 81.0537 115.839 80.7288 116.212C80.398 116.591 79.8794 116.844 79.2841 116.884L79.2835 116.884C78.0423 116.969 76.813 116.884 75.5761 116.732L75.0509 116.667L75.1902 117.178C76.3913 121.581 75.5094 126.613 72.2206 129.632L72.2205 129.632C71.7258 130.087 70.9287 130.167 70.2609 129.9C69.6069 129.639 69.169 129.088 69.271 128.347C69.3194 127.995 69.4008 127.571 69.4954 127.103L68.8304 126.873C67.8938 128.734 66.6917 130.265 65.3139 131.188C64.9642 131.423 64.6327 131.484 64.3369 131.443C64.0355 131.401 63.7443 131.248 63.4936 131.01C62.9825 130.526 62.7021 129.751 62.8441 129.091L62.8441 129.09C62.9424 128.632 63.061 128.173 63.1835 127.708L62.5314 127.442C62.2316 127.97 61.9092 128.491 61.5532 129C60.9141 129.912 59.8601 129.931 59.0862 129.448C58.701 129.208 58.416 128.858 58.3041 128.47C58.1954 128.094 58.2398 127.649 58.5711 127.175L58.5714 127.175C59.0647 126.468 59.4665 125.751 59.8276 125.031L59.2889 124.594C58.593 125.15 57.8565 125.745 57.2257 126.535L57.2255 126.535C56.5309 127.407 55.4308 127.402 54.6501 126.918C54.2629 126.677 53.9895 126.336 53.8928 125.97C53.7996 125.618 53.8578 125.197 54.217 124.746C54.7488 124.08 55.3828 123.555 56.0525 123.022C56.1103 122.976 56.1684 122.93 56.2268 122.883C56.8364 122.4 57.4712 121.896 58.0296 121.279C59.1324 120.062 59.3606 118.165 58.9993 116.584C58.9502 116.368 58.8084 116.202 58.6547 116.077C58.4986 115.95 58.2996 115.841 58.0777 115.744C57.6332 115.55 57.0368 115.382 56.3515 115.233C54.9767 114.935 53.1756 114.702 51.3527 114.52C49.527 114.337 47.6679 114.203 46.1729 114.105C45.6772 114.072 45.2238 114.044 44.8255 114.019C44.0139 113.968 43.431 113.931 43.1852 113.904C41.1913 113.685 39.1581 113.502 37.1077 113.317C29.2675 112.611 21.1767 111.883 14.0733 109.006C3.33163 104.657 -1.37194 94.4929 0.923721 83.3038C1.71068 79.4684 3.89997 75.4155 6.60297 71.6093C9.30254 67.808 12.4961 64.2781 15.2624 61.4905C16.4665 60.2775 23.3589 54.0362 26.6783 51.4083C28.5864 55.8726 31.2413 59.9354 33.881 63.9747C34.233 64.5134 34.5847 65.0516 34.9344 65.5904C31.4059 68.6723 24.2216 75.126 20.9342 79.4063L20.9341 79.4063C19.7599 80.9355 18.4967 82.7689 17.7299 84.7331C16.9617 86.701 16.6807 88.8304 17.5172 90.9237L17.5172 90.9238C18.6253 93.6955 20.9091 95.0866 23.4578 95.8739C25.329 96.4519 27.3924 96.7171 29.2772 96.9593C29.9386 97.0443 30.578 97.1264 31.1795 97.2183C31.9897 97.3423 32.7999 97.465 33.6099 97.5877C38.9129 98.3907 44.2051 99.1921 49.4307 100.353L49.4307 100.353C53.529 101.262 57.5826 102.439 61.4608 104.028Z"
        fill="#F5BE66"
        stroke="#3A2E32"
        stroke-width="0.71"
      />
      <Path
        d="M136.662 152.058C133.608 138.342 130.555 124.625 127.503 110.916C132.671 110.44 137.003 108.786 141.718 106.985C142.158 106.817 142.601 106.648 143.048 106.478C145.584 118.2 147.977 130.223 150.371 142.249L150.372 142.255C152.793 154.42 155.215 166.588 157.785 178.446L157.812 178.57L157.911 178.648C159.055 179.56 160.226 180.467 161.405 181.38C166.147 185.053 171.011 188.821 174.704 193.328H145.849C142.787 179.576 139.725 165.817 136.662 152.058Z"
        fill="#F5BE66"
        stroke="#3A2E32"
        stroke-width="0.71"
      />
      <Path
        d="M74.5329 178.648L74.6318 178.57L74.6586 178.446C77.2296 166.588 79.652 154.42 82.0735 142.255L82.0828 142.209C84.474 130.196 86.8644 118.187 89.3973 106.478C89.8447 106.648 90.2878 106.817 90.7275 106.985C95.4431 108.786 99.7742 110.44 104.942 110.916C101.892 124.613 98.844 138.308 95.7955 152.002C92.7292 165.776 89.6629 179.55 86.5953 193.328H57.7403C61.4323 188.823 66.2929 185.057 71.0323 181.386C72.2134 180.471 73.3869 179.562 74.5329 178.648Z"
        fill="#F5BE66"
        stroke="#3A2E32"
        stroke-width="0.71"
      />
      <Path
        d="M21.6559 37.4362C20.9724 32.7917 24.6659 28.6361 29.3743 28.6361H202.74C207.448 28.6361 211.142 32.7917 210.458 37.4362C203.675 83.4896 163.994 118.837 116.057 118.837C68.1202 118.837 28.4388 83.4878 21.6559 37.4362Z"
        fill="#F5BE66"
        stroke="#3A2E32"
        stroke-width="0.71"
      />
      <Path
        d="M137.396 62.9471C139.965 73.1835 153.48 73.5823 157.238 64.0045C158.054 61.9249 154.7 61.0252 153.893 63.0825C151.3 69.6922 142.405 68.6552 140.741 62.0251C140.197 59.8602 136.853 60.7766 137.396 62.9471Z"
        fill="#3A2E32"
      />
      <Path
        d="M74.8072 62.9471C77.3765 73.1835 90.8908 73.5823 94.6492 64.0045C95.4654 61.9249 92.1115 61.0252 91.3045 63.0825C88.7111 69.6922 79.8159 68.6552 78.1519 62.0251C77.6083 59.8602 74.2618 60.7766 74.8072 62.9471Z"
        fill="#3A2E32"
      />
      <Path
        d="M122.709 63.0473C120.643 67.0951 115.354 67.7908 112.683 63.8617C111.434 62.027 108.427 63.7596 109.687 65.6129C113.712 71.5306 122.366 71.3321 125.704 64.7985C126.718 62.8154 123.726 61.0568 122.709 63.0473Z"
        fill="#3A2E32"
      />
      <Path
        d="M61.1094 118.867C60.5194 121.501 58.8796 123.788 57.1209 125.783C56.4067 126.592 57.5921 127.786 58.31 126.972C60.256 124.766 62.0759 122.23 62.7307 119.314C62.9663 118.258 61.3468 117.81 61.1094 118.867Z"
        fill="#3A2E32"
      />
      <Path
        d="M66.2385 120.067C64.9697 123.033 63.4986 125.892 61.3244 128.306C60.6028 129.107 61.7863 130.302 62.5135 129.495C64.786 126.972 66.3628 124.022 67.6892 120.917C68.1103 119.932 66.6633 119.073 66.2385 120.067Z"
        fill="#3A2E32"
      />
      <Path
        d="M71.1993 120.267C70.4628 123.542 69.5389 127.176 67.2108 129.706C66.4799 130.502 67.6653 131.695 68.3999 130.895C70.934 128.139 72.0173 124.286 72.8206 120.715C73.058 119.661 71.4367 119.21 71.1993 120.267Z"
        fill="#3A2E32"
      />
      <Path
        d="M163.629 127.274C162.779 124.833 162.279 122.525 162.258 119.93C162.249 118.848 160.568 118.846 160.577 119.93C160.598 122.672 161.11 125.137 162.01 127.721C162.36 128.736 163.985 128.3 163.629 127.274Z"
        fill="#3A2E32"
      />
      <Path
        d="M170.139 127.463C168.284 125.582 167.452 122.815 167.582 120.21C167.636 119.129 165.955 119.132 165.902 120.21C165.75 123.245 166.799 126.471 168.95 128.653C169.71 129.424 170.899 128.235 170.139 127.463Z"
        fill="#3A2E32"
      />
      <Path
        d="M174.474 125.952C173.168 124.141 171.803 122.201 171.506 119.93C171.367 118.873 169.684 118.858 169.825 119.93C170.166 122.546 171.506 124.696 173.023 126.801C173.65 127.671 175.108 126.833 174.474 125.952Z"
        fill="#3A2E32"
      />
      <Path
        d="M132.642 5.06091C130.274 4.69546 128.134 5.27239 126.357 6.50417C123.832 -1.44488 112.864 -2.06076 107.097 4.39866C107.088 4.40793 107.082 4.42093 107.073 4.43206C104.452 1.6958 100.884 0.131959 97.5192 2.17256C94.2041 4.18162 93.5882 8.87685 94.2505 12.3477C95.191 17.2823 98.4411 21.6028 102.433 24.5208C103.639 25.402 104.799 23.3911 103.604 22.5192C100.734 20.4211 98.3651 17.4548 97.1352 14.0989C96.0722 11.1976 95.5546 6.2723 98.5747 4.27436C101.064 2.62705 103.804 4.10741 105.8 6.40957C104.442 9.22374 104.396 12.8708 106.878 15.0394C107.824 15.8668 109.423 16.5718 110.553 15.6461C111.661 14.7371 111.217 13.1306 110.906 11.8505C110.664 10.0734 109.826 8.08285 108.59 6.30011C109.9 4.62126 111.889 3.38949 113.883 2.74021C118.858 1.11701 123.555 3.27817 124.433 8.25909C124.127 8.61526 123.837 8.99186 123.568 9.39256C122.452 11.0603 121.389 15.1452 124.782 15.0357C127.475 14.9485 127.093 10.9397 127.056 9.14584C127.054 9.05123 127.019 8.98072 127 8.89909C129.772 6.51902 137.263 6.79357 137.259 11.6187C137.257 13.1102 139.576 13.1139 139.578 11.6187C139.581 8.05132 135.886 5.56179 132.642 5.06091ZM107.303 11.1029C107.136 10.2756 107.18 9.45193 107.379 8.66537C107.943 9.66897 108.357 10.6911 108.548 11.602C108.542 11.7077 108.525 11.8097 108.548 11.9247C108.859 13.47 107.535 12.2568 107.303 11.1029Z"
        fill="#3A2E32"
      />
    </Svg>
  );
};
