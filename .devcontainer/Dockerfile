# Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu

# ユーザーとグループのIDを必要に応じて更新
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# UID/GIDを更新して必要ならユーザーを作成
RUN if [ "$USER_UID" != "1000" ] || [ "$USER_GID" != "1000" ]; then \
    groupmod -o -g "$USER_GID" "$USERNAME" || (addgroup -g "$USER_GID" "$USERNAME" && groupmod -o -g "$USER_GID" "$USERNAME"); \
    usermod -o -u "$USER_UID" -g "$USER_GID" "$USERNAME" || (adduser -u "$USER_UID" -D -G "$USERNAME" "$USERNAME" && usermod -o -u "$USER_UID" -g "$USER_GID" "$USERNAME"); \
    chown -R $USER_UID:$USER_GID /home/$USERNAME; \
    fi

# ワークスペースディレクトリの設定
WORKDIR /workspace

# Switch User
USER ${USERNAME}

# Node.js Install
ARG NODE_VERSION=20.13.1
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . ~/.nvm/nvm.sh \
    && bash -i -c 'nvm install ${NODE_VERSION}'

# Bun Install
RUN curl -fsSL https://bun.sh/install | bash \
    && sudo chown -R $USERNAME:$USERNAME /root \
    && echo 'export PATH="/root/.bun/bin:$PATH"' >> /home/$USERNAME/.bashrc