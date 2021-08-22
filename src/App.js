import { Component } from 'react';
import './App.css';
import PlayerCompWinn from './helpers/PlayerCompWinn.js';
import Play from './assets/play.png';
import Animation from './assets/animation.png';
import Rock from './assets/rock.png';
import Scissors from './assets/scissors.png';
import Paper from './assets/paper.png';
import Reset from './assets/reset.png';

class App extends Component {
  state = {
    played: false,
    Player: null,
    Computer: null,
  };

  render() {
    const { played, Player, Computer } = this.state;
    const Images = {
      Rock,
      Scissors,
      Paper,
    };
    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>
        {played ? (
          <div className="player_computer">
            <div className={'player' + (Player ? 'selected' : '')}>
              <p>Player</p>
              {Player ? (
                <img src={Images[Player]} alt="Player" />
              ) : (
                <div className="all_choices">
                  {Object.keys(Images).map((item) => (
                    <span key={item}>
                      <img
                        src={Images[item]}
                        alt={item}
                        onClick={() => {
                          this.setState({
                            Player: item,
                            Computer:
                              Object.keys(Images)[
                                Math.floor(
                                  Math.random() * Object.keys(Images).length
                                )
                              ],
                          });
                        }}
                      />
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="computer">
              <p>Computer</p>
              {Computer ? (
                <img src={Images[Computer]} alt="Computer" />
              ) : (
                <img src={Animation} alt="animation" />
              )}
            </div>
          </div>
        ) : (
          <img
            className="play"
            src={Play}
            alt="play"
            onClick={() => {
              this.setState({ played: true });
            }}
          />
        )}
        {Player && Computer && (
          <p className="winner">
            {(() => {
              const Winner = PlayerCompWinn(Player, Computer);
              if (Winner === 'same') {
                return 'Nobody Wins!';
              } else {
                if (Winner === Player) {
                  return 'Player Wins!';
                } else {
                  return 'Computer Wins!';
                }
              }
            })()}
            <img
              src={Reset}
              alt="reset"
              onClick={() => {
                this.setState({
                  played: false,
                  Player: null,
                  Computer: null,
                });
              }}
            />
          </p>
        )}
      </div>
    );
  }
}
export default App;
