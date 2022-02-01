import pygame,random
from pygame.locals import *
from sys import exit
from time import sleep
#定义颜色变量
blackColour = pygame.Color(0,0,0)
greyColour = pygame.Color(150,150,150) 

#定义gameOver函数
def gameOver(screen):
    gameOverFont = pygame.font.SysFont('simsunnsimsun', 70)
    gameOverSurf = gameOverFont.render('Game Over',True,(greyColour))
    gameOverRect = gameOverSurf.get_rect()
    gameOverRect.midtop = (480,300)
    screen.blit(gameOverSurf,gameOverRect)
    pygame.display.flip()
    sleep(3) 
    exit()

#定义main函数
def main():
    #初始化pygame
    pygame.init()
    fpsClock = pygame.time.Clock()
    #创建pygame显示器
    screen = pygame.display.set_mode((960,720))
    pygame.display.set_caption('Raspberry Snake')

    #初始化变量
    head_position = [400,100]
    seg=[[i*20,100] for i in range(20,1,-1)]
    ras_post = [300,300]
    ras_flag = 1
    direction = 'right'
    change_dir = direction
    while True:
    #检测例如按键等pygame事件
        for event in pygame.event.get():
            if event.type == QUIT:
                exit()
            elif event.type == KEYDOWN:
            # 判断键盘事件
                if event.key == K_ESCAPE :
                    exit()
                # elif event.key == ord('d'):
                # 这个应该是unicode码转换，类似那个等于数字判断
                elif event.key in (K_RIGHT,K_d):
                    change_dir = 'right'
                elif event.key in (K_LEFT,K_a):
                    change_dir = 'left'
                elif event.key in (K_UP,K_w):
                    change_dir = 'up'
                elif event.key in (K_DOWN,K_s):
                    change_dir = 'down'
        #判断是否输入了反方向
        dirs =[['up','down'],['left','right']]
        if (direction in dirs[0] and change_dir in dirs[1])or(direction in dirs[1] and change_dir in dirs[0]):
            direction = change_dir
            #这里借鉴了test0里的方法
        #根据方向移动蛇头坐标
        if direction == 'right':
            head_position[0]+=20        
        if direction == 'left':
            head_position[0]-=20        
        if direction == 'down':
            head_position[1]+=20        
        if direction == 'up':
            head_position[1]-=20
        #增加蛇的长度
        seg.insert(0,list(head_position))
        #判断是否吃掉了树莓
        if head_position[0] == ras_post[0] and head_position[1]==ras_post[1]:
            ras_flag = 0
        else:
            seg.pop()
        #如果吃掉树莓，则重新生成树莓
        if ras_flag == 0:
            x = random.randrange(1,32)
            y = random.randrange(1,24)
            ras_post = [int(x*20),int(y*20)]
            ras_flag = 1
        #绘制pygame显示器
        screen.fill(blackColour)
        for x in range(0, 980, 20):
            pygame.draw.line(screen,(25,25,112),(x,0), (x,720),1)    
        for y in range(0, 740, 20):
            pygame.draw.line(screen,(25,25,112),(0,y), (960,y),1)
        for position in seg:
            pygame.draw.rect(screen,[255,255,255],
                                [position[0],position[1],20,20],0)      
                                #白色蛇      
            pygame.draw.rect(screen,[255,0,0],
                                [ras_post[0],ras_post[1],20,20],0)
                                #红色果实
        #刷新显示器
        pygame.display.flip()
        #判断是否死亡
        if head_position[0]>940 or head_position[0]<0:
            gameOver(screen)        
        if head_position[1]>700 or head_position[1]<0:
            gameOver(screen)
        # 控制游戏速度
        fpsClock.tick(8)

if __name__ == "__main__":
    main()
